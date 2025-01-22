FROM debian:12.9

# 安装nodejs
RUN apt update
RUN apt install wget curl gpg -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
RUN export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install 23 \
    && nvm use 23
# 安装pnpm
RUN corepack enable pnpm
RUN yes | pnpm -v
# 安装fish
RUN echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_12/ /' | tee /etc/apt/sources.list.d/shells:fish:release:3.list
RUN curl -fsSL https://download.opensuse.org/repositories/shells:fish:release:3/Debian_12/Release.key | gpg --dearmor | tee /etc/apt/trusted.gpg.d/shells_fish_release_3.gpg > /dev/null
RUN apt update
RUN apt install fish -y
# 安装chromium
RUN yes | npx @puppeteer/browsers install chrome@stable
