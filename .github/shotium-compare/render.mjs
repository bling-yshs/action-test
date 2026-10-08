// 用 @pixel.js/shotium 与 Playwright Chromium 渲染同一页面，逐用例截图并做像素对比。
// 用法：node render.mjs <输出目录>
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import shotium, { screenshot } from '@pixel.js/shotium';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const require = createRequire(import.meta.url);
const outDir = resolve(process.argv[2] ?? 'out');
const viewport = { width: 760, height: 600 };
const scale = 2;

const EMOJI = '😀 🚀 🔥 👍🏽 ❤️ ✅ 🇨🇳 👨‍👩‍👧‍👦 🏳️‍🌈 ☃️ ⭐';
const ENGLISH = 'The quick brown fox jumps over the lazy dog';
const MIXED = 'Hello 👋 world 🌍, ship it 🚀!';
const FONTS = [
  ['default', ''],
  ['sans-serif', 'sans-serif'],
  ['serif', 'serif'],
  ['monospace', 'monospace'],
  ['system-ui', 'system-ui'],
  ['Arial', 'Arial, sans-serif'],
  ['Noto Color Emoji', "'Noto Color Emoji'"],
];

const cases = FONTS.flatMap(([font, family]) =>
  [
    ['emoji', EMOJI],
    ['english', ENGLISH],
    ['mixed', MIXED],
  ].map(([kind, text]) => ({ name: `${font} / ${kind}`, family, text })),
);
cases.forEach((c, i) => (c.id = `c${String(i).padStart(2, '0')}`));

const pageHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body { margin: 0; padding: 16px; background: #fff; color: #111; }
  section { padding: 6px 12px; margin: 0 0 8px; border: 1px solid #ddd; }
  .label { font: 12px/16px monospace; color: #888; }
  .text { font-size: 24px; line-height: 36px; white-space: nowrap; }
</style></head><body>
${cases
  .map(
    (c) => `<section id="${c.id}"><div class="label">${c.name}</div>` +
      `<div class="text"${c.family ? ` style="font-family: ${c.family}"` : ''}>${c.text}</div></section>`,
  )
  .join('\n')}
</body></html>
`;

mkdirSync(join(outDir, 'shotium'), { recursive: true });
mkdirSync(join(outDir, 'playwright'), { recursive: true });
mkdirSync(join(outDir, 'diff'), { recursive: true });
const pagePath = join(outDir, 'page.html');
writeFileSync(pagePath, pageHtml, 'utf8');

function padTo(png, width, height) {
  if (png.width === width && png.height === height) return png;
  const padded = new PNG({ width, height });
  padded.data.fill(0);
  PNG.bitblt(png, padded, 0, 0, png.width, png.height, 0, 0);
  return padded;
}

function diffPng(aBuf, bBuf) {
  const a = PNG.sync.read(aBuf);
  const b = PNG.sync.read(bBuf);
  const width = Math.max(a.width, b.width);
  const height = Math.max(a.height, b.height);
  const out = new PNG({ width, height });
  const pixels = pixelmatch(padTo(a, width, height).data, padTo(b, width, height).data, out.data, width, height, {
    threshold: 0.1,
  });
  return {
    shotiumSize: `${a.width}x${a.height}`,
    playwrightSize: `${b.width}x${b.height}`,
    diffPixels: pixels,
    diffRatio: pixels / (width * height),
    png: PNG.sync.write(out),
  };
}

shotium.start({ cacheDir: null });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport, deviceScaleFactor: scale });
await page.goto(pathToFileURL(pagePath).href);
await page.evaluate(() => document.fonts.ready);

const versions = {
  shotium: require('@pixel.js/shotium/package.json').version,
  playwright: require('playwright/package.json').version,
  chromium: browser.version(),
};
console.log('versions', versions);

// 整页截图
const fullShotium = (await screenshot({ file: pagePath, viewport, scale, fullPage: true })).image;
const fullPlaywright = await page.screenshot({ fullPage: true });
writeFileSync(join(outDir, 'full-shotium.png'), fullShotium);
writeFileSync(join(outDir, 'full-playwright.png'), fullPlaywright);
const fullDiff = diffPng(fullShotium, fullPlaywright);
writeFileSync(join(outDir, 'full-diff.png'), fullDiff.png);

// 逐用例截图
const results = [];
for (const c of cases) {
  const result = { id: c.id, name: c.name };
  try {
    const a = (await screenshot({ file: pagePath, viewport, scale, selector: `#${c.id}` })).image;
    const b = await page.locator(`#${c.id}`).screenshot();
    writeFileSync(join(outDir, 'shotium', `${c.id}.png`), a);
    writeFileSync(join(outDir, 'playwright', `${c.id}.png`), b);
    const { png, ...diff } = diffPng(a, b);
    writeFileSync(join(outDir, 'diff', `${c.id}.png`), png);
    Object.assign(result, diff);
  } catch (error) {
    result.error = String(error?.stack ?? error);
    console.error(`[${c.id}] ${c.name} failed:`, error);
  }
  results.push(result);
}

// 汇总对比图：每行 = 用例名 | shotium | playwright | diff
const percent = (r) => (r.diffRatio * 100).toFixed(2) + '%';
const compareHtml = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body { margin: 0; padding: 16px; font: 14px/1.4 sans-serif; background: #f6f6f6; }
  table { border-collapse: collapse; background: #fff; }
  th, td { border: 1px solid #ccc; padding: 6px; vertical-align: top; text-align: left; }
  td.meta { width: 200px; font-family: monospace; font-size: 12px; }
  img { display: block; }
  .err { color: #c00; white-space: pre-wrap; }
</style></head><body>
<h2>shotium ${versions.shotium} vs Playwright ${versions.playwright} (Chromium ${versions.chromium}) · DPR ${scale}</h2>
<table>
<tr><th>case</th><th>shotium</th><th>playwright</th><th>diff (red = different)</th></tr>
${results
  .map((r) =>
    r.error
      ? `<tr><td class="meta">${r.name}</td><td colspan="3" class="err">${r.error}</td></tr>`
      : `<tr><td class="meta">${r.name}<br>shotium ${r.shotiumSize}<br>playwright ${r.playwrightSize}<br>diff ${r.diffPixels} px (${percent(r)})</td>` +
        ['shotium', 'playwright', 'diff']
          .map((dir) => `<td><img src="${dir}/${r.id}.png" style="zoom: ${1 / scale}"></td>`)
          .join('') +
        '</tr>',
  )
  .join('\n')}
</table></body></html>
`;
const comparePath = join(outDir, 'compare.html');
writeFileSync(comparePath, compareHtml, 'utf8');
const comparePage = await browser.newPage({ deviceScaleFactor: scale });
await comparePage.goto(pathToFileURL(comparePath).href);
await comparePage.screenshot({ path: join(outDir, 'compare.png'), fullPage: true });

writeFileSync(join(outDir, 'results.json'), JSON.stringify({ versions, full: { ...fullDiff, png: undefined }, results }, null, 2));

const summary = [
  `## shotium vs Playwright`,
  '',
  `shotium \`${versions.shotium}\` · playwright \`${versions.playwright}\` · chromium \`${versions.chromium}\` · DPR ${scale}`,
  '',
  `Full page: shotium ${fullDiff.shotiumSize}, playwright ${fullDiff.playwrightSize}, diff ${fullDiff.diffPixels} px (${percent(fullDiff)})`,
  '',
  '| case | shotium | playwright | diff px | diff % |',
  '|---|---|---|---|---|',
  ...results.map((r) =>
    r.error
      ? `| ${r.name} | ❌ | | | ${r.error.split('\n')[0]} |`
      : `| ${r.name} | ${r.shotiumSize} | ${r.playwrightSize} | ${r.diffPixels} | ${percent(r)} |`,
  ),
  '',
].join('\n');
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

await browser.close();
await shotium.stop();
process.exit(results.some((r) => r.error) ? 1 : 0);
