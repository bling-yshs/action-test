# acition-test

acition-test

#### 打印 github 变量

```yaml
- name: Install jq
  run: sudo apt-get install -y jq

- name: Print and format GitHub context
  run: echo '${{ toJSON(github) }}' | jq '.'
```

<details>
<summary>输出结果(event push)</summary>
<pre>
<code>
{
  "token": "***",
  "job": "build",
  "ref": "refs/heads/main",
  "sha": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
  "repository": "bling-yshs/action-test",
  "repository_owner": "bling-yshs",
  "repository_owner_id": "41812674",
  "repositoryUrl": "git://github.com/bling-yshs/action-test.git",
  "run_id": "10233711550",
  "run_number": "142",
  "retention_days": "90",
  "run_attempt": "1",
  "artifact_cache_size_limit": "10",
  "repository_visibility": "public",
  "repo-self-hosted-runners-disabled": false,
  "enterprise-managed-business-id": "",
  "repository_id": "713478310",
  "actor_id": "41812674",
  "actor": "bling-yshs",
  "triggering_actor": "bling-yshs",
  "workflow": "CI",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    "after": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
    "base_ref": null,
    "before": "a4477de5ac7471279d441c76a099631c921de62b",
    "commits": [
      {
        "author": {
          "email": "377178599@qq.com",
          "name": "bling-yshs",
          "username": "bling-yshs"
        },
        "committer": {
          "email": "377178599@qq.com",
          "name": "bling-yshs",
          "username": "bling-yshs"
        },
        "distinct": true,
        "id": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
        "message": "1",
        "timestamp": "2024-08-04T13:14:19+08:00",
        "tree_id": "efa33ab8245c880e546ca3fb423130191196aaef",
        "url": "https://github.com/bling-yshs/action-test/commit/4df5bbbf01313fb842e99f6d3385ed6d23c0ff10"
      }
    ],
    "compare": "https://github.com/bling-yshs/action-test/compare/a4477de5ac74...4df5bbbf0131",
    "created": false,
    "deleted": false,
    "forced": false,
    "head_commit": {
      "author": {
        "email": "377178599@qq.com",
        "name": "bling-yshs",
        "username": "bling-yshs"
      },
      "committer": {
        "email": "377178599@qq.com",
        "name": "bling-yshs",
        "username": "bling-yshs"
      },
      "distinct": true,
      "id": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
      "message": "1",
      "timestamp": "2024-08-04T13:14:19+08:00",
      "tree_id": "efa33ab8245c880e546ca3fb423130191196aaef",
      "url": "https://github.com/bling-yshs/action-test/commit/4df5bbbf01313fb842e99f6d3385ed6d23c0ff10"
    },
    "pusher": {
      "email": "41812674+bling-yshs@users.noreply.github.com",
      "name": "bling-yshs"
    },
    "ref": "refs/heads/main",
    "repository": {
      "allow_forking": true,
      "archive_url": "https://api.github.com/repos/bling-yshs/action-test/{archive_format}{/ref}",
      "archived": false,
      "assignees_url": "https://api.github.com/repos/bling-yshs/action-test/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/bling-yshs/action-test/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/bling-yshs/action-test/branches{/branch}",
      "clone_url": "https://github.com/bling-yshs/action-test.git",
      "collaborators_url": "https://api.github.com/repos/bling-yshs/action-test/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/bling-yshs/action-test/comments{/number}",
      "commits_url": "https://api.github.com/repos/bling-yshs/action-test/commits{/sha}",
      "compare_url": "https://api.github.com/repos/bling-yshs/action-test/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/bling-yshs/action-test/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/bling-yshs/action-test/contributors",
      "created_at": 1698940052,
      "default_branch": "main",
      "deployments_url": "https://api.github.com/repos/bling-yshs/action-test/deployments",
      "description": "acition-test",
      "disabled": false,
      "downloads_url": "https://api.github.com/repos/bling-yshs/action-test/downloads",
      "events_url": "https://api.github.com/repos/bling-yshs/action-test/events",
      "fork": false,
      "forks": 1,
      "forks_count": 1,
      "forks_url": "https://api.github.com/repos/bling-yshs/action-test/forks",
      "full_name": "bling-yshs/action-test",
      "git_commits_url": "https://api.github.com/repos/bling-yshs/action-test/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/bling-yshs/action-test/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/bling-yshs/action-test/git/tags{/sha}",
      "git_url": "git://github.com/bling-yshs/action-test.git",
      "has_discussions": false,
      "has_downloads": true,
      "has_issues": true,
      "has_pages": false,
      "has_projects": true,
      "has_wiki": true,
      "homepage": null,
      "hooks_url": "https://api.github.com/repos/bling-yshs/action-test/hooks",
      "html_url": "https://github.com/bling-yshs/action-test",
      "id": 713478310,
      "is_template": false,
      "issue_comment_url": "https://api.github.com/repos/bling-yshs/action-test/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/bling-yshs/action-test/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/bling-yshs/action-test/issues{/number}",
      "keys_url": "https://api.github.com/repos/bling-yshs/action-test/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/bling-yshs/action-test/labels{/name}",
      "language": "Dockerfile",
      "languages_url": "https://api.github.com/repos/bling-yshs/action-test/languages",
      "license": null,
      "master_branch": "main",
      "merges_url": "https://api.github.com/repos/bling-yshs/action-test/merges",
      "milestones_url": "https://api.github.com/repos/bling-yshs/action-test/milestones{/number}",
      "mirror_url": null,
      "name": "action-test",
      "node_id": "R_kgDOKobQpg",
      "notifications_url": "https://api.github.com/repos/bling-yshs/action-test/notifications{?since,all,participating}",
      "open_issues": 1,
      "open_issues_count": 1,
      "owner": {
        "avatar_url": "https://avatars.githubusercontent.com/u/41812674?v=4",
        "email": "41812674+bling-yshs@users.noreply.github.com",
        "events_url": "https://api.github.com/users/bling-yshs/events{/privacy}",
        "followers_url": "https://api.github.com/users/bling-yshs/followers",
        "following_url": "https://api.github.com/users/bling-yshs/following{/other_user}",
        "gists_url": "https://api.github.com/users/bling-yshs/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/bling-yshs",
        "id": 41812674,
        "login": "bling-yshs",
        "name": "bling-yshs",
        "node_id": "MDQ6VXNlcjQxODEyNjc0",
        "organizations_url": "https://api.github.com/users/bling-yshs/orgs",
        "received_events_url": "https://api.github.com/users/bling-yshs/received_events",
        "repos_url": "https://api.github.com/users/bling-yshs/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/bling-yshs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bling-yshs/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/bling-yshs"
      },
      "private": false,
      "pulls_url": "https://api.github.com/repos/bling-yshs/action-test/pulls{/number}",
      "pushed_at": 1722748471,
      "releases_url": "https://api.github.com/repos/bling-yshs/action-test/releases{/id}",
      "size": 7426,
      "ssh_url": "git@github.com:bling-yshs/action-test.git",
      "stargazers": 0,
      "stargazers_count": 0,
      "stargazers_url": "https://api.github.com/repos/bling-yshs/action-test/stargazers",
      "statuses_url": "https://api.github.com/repos/bling-yshs/action-test/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/bling-yshs/action-test/subscribers",
      "subscription_url": "https://api.github.com/repos/bling-yshs/action-test/subscription",
      "svn_url": "https://github.com/bling-yshs/action-test",
      "tags_url": "https://api.github.com/repos/bling-yshs/action-test/tags",
      "teams_url": "https://api.github.com/repos/bling-yshs/action-test/teams",
      "topics": [],
      "trees_url": "https://api.github.com/repos/bling-yshs/action-test/git/trees{/sha}",
      "updated_at": "2024-08-04T04:32:59Z",
      "url": "https://github.com/bling-yshs/action-test",
      "visibility": "public",
      "watchers": 0,
      "watchers_count": 0,
      "web_commit_signoff_required": false
    },
    "sender": {
      "avatar_url": "https://avatars.githubusercontent.com/u/41812674?v=4",
      "events_url": "https://api.github.com/users/bling-yshs/events{/privacy}",
      "followers_url": "https://api.github.com/users/bling-yshs/followers",
      "following_url": "https://api.github.com/users/bling-yshs/following{/other_user}",
      "gists_url": "https://api.github.com/users/bling-yshs/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/bling-yshs",
      "id": 41812674,
      "login": "bling-yshs",
      "node_id": "MDQ6VXNlcjQxODEyNjc0",
      "organizations_url": "https://api.github.com/users/bling-yshs/orgs",
      "received_events_url": "https://api.github.com/users/bling-yshs/received_events",
      "repos_url": "https://api.github.com/users/bling-yshs/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/bling-yshs/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/bling-yshs/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/bling-yshs"
    }
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "main",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workflow_ref": "bling-yshs/action-test/.github/workflows/test.yml@refs/heads/main",
  "workflow_sha": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
  "workspace": "/home/runner/work/action-test/action-test",
  "action": "__run_2",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_491ca748-b8b1-4484-84f5-8225453da481",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_491ca748-b8b1-4484-84f5-8225453da481",
  "step_summary": "/home/runner/work/_temp/_runner_file_commands/step_summary_491ca748-b8b1-4484-84f5-8225453da481",
  "state": "/home/runner/work/_temp/_runner_file_commands/save_state_491ca748-b8b1-4484-84f5-8225453da481",
  "output": "/home/runner/work/_temp/_runner_file_commands/set_output_491ca748-b8b1-4484-84f5-8225453da481"
}
</code>
</pre>
</details>
<details>
<summary>输出结果(event schedule)</summary>
<pre>
<code>
{
  "token": "***",
  "job": "build",
  "ref": "refs/heads/main",
  "sha": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
  "repository": "bling-yshs/action-test",
  "repository_owner": "bling-yshs",
  "repository_owner_id": "41812674",
  "repositoryUrl": "git://github.com/bling-yshs/action-test.git",
  "run_id": "10233789769",
  "run_number": "143",
  "retention_days": "90",
  "run_attempt": "1",
  "artifact_cache_size_limit": "10",
  "repository_visibility": "public",
  "repo-self-hosted-runners-disabled": false,
  "enterprise-managed-business-id": "",
  "repository_id": "713478310",
  "actor_id": "41812674",
  "actor": "bling-yshs",
  "triggering_actor": "bling-yshs",
  "workflow": "CI",
  "head_ref": "",
  "base_ref": "",
  "event_name": "schedule",
  "event": {
    "repository": {
      "allow_forking": true,
      "archive_url": "https://api.github.com/repos/bling-yshs/action-test/{archive_format}{/ref}",
      "archived": false,
      "assignees_url": "https://api.github.com/repos/bling-yshs/action-test/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/bling-yshs/action-test/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/bling-yshs/action-test/branches{/branch}",
      "clone_url": "https://github.com/bling-yshs/action-test.git",
      "collaborators_url": "https://api.github.com/repos/bling-yshs/action-test/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/bling-yshs/action-test/comments{/number}",
      "commits_url": "https://api.github.com/repos/bling-yshs/action-test/commits{/sha}",
      "compare_url": "https://api.github.com/repos/bling-yshs/action-test/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/bling-yshs/action-test/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/bling-yshs/action-test/contributors",
      "created_at": "2023-11-02T15:47:32Z",
      "default_branch": "main",
      "deployments_url": "https://api.github.com/repos/bling-yshs/action-test/deployments",
      "description": "acition-test",
      "disabled": false,
      "downloads_url": "https://api.github.com/repos/bling-yshs/action-test/downloads",
      "events_url": "https://api.github.com/repos/bling-yshs/action-test/events",
      "fork": false,
      "forks": 1,
      "forks_count": 1,
      "forks_url": "https://api.github.com/repos/bling-yshs/action-test/forks",
      "full_name": "bling-yshs/action-test",
      "git_commits_url": "https://api.github.com/repos/bling-yshs/action-test/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/bling-yshs/action-test/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/bling-yshs/action-test/git/tags{/sha}",
      "git_url": "git://github.com/bling-yshs/action-test.git",
      "has_discussions": false,
      "has_downloads": true,
      "has_issues": true,
      "has_pages": false,
      "has_projects": true,
      "has_wiki": true,
      "homepage": null,
      "hooks_url": "https://api.github.com/repos/bling-yshs/action-test/hooks",
      "html_url": "https://github.com/bling-yshs/action-test",
      "id": 713478310,
      "is_template": false,
      "issue_comment_url": "https://api.github.com/repos/bling-yshs/action-test/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/bling-yshs/action-test/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/bling-yshs/action-test/issues{/number}",
      "keys_url": "https://api.github.com/repos/bling-yshs/action-test/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/bling-yshs/action-test/labels{/name}",
      "language": "Dockerfile",
      "languages_url": "https://api.github.com/repos/bling-yshs/action-test/languages",
      "license": null,
      "merges_url": "https://api.github.com/repos/bling-yshs/action-test/merges",
      "milestones_url": "https://api.github.com/repos/bling-yshs/action-test/milestones{/number}",
      "mirror_url": null,
      "name": "action-test",
      "node_id": "R_kgDOKobQpg",
      "notifications_url": "https://api.github.com/repos/bling-yshs/action-test/notifications{?since,all,participating}",
      "open_issues": 1,
      "open_issues_count": 1,
      "owner": {
        "avatar_url": "https://avatars.githubusercontent.com/u/41812674?v=4",
        "events_url": "https://api.github.com/users/bling-yshs/events{/privacy}",
        "followers_url": "https://api.github.com/users/bling-yshs/followers",
        "following_url": "https://api.github.com/users/bling-yshs/following{/other_user}",
        "gists_url": "https://api.github.com/users/bling-yshs/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/bling-yshs",
        "id": 41812674,
        "login": "bling-yshs",
        "node_id": "MDQ6VXNlcjQxODEyNjc0",
        "organizations_url": "https://api.github.com/users/bling-yshs/orgs",
        "received_events_url": "https://api.github.com/users/bling-yshs/received_events",
        "repos_url": "https://api.github.com/users/bling-yshs/repos",
        "site_admin": false,
        "starred_url": "https://api.github.com/users/bling-yshs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bling-yshs/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/bling-yshs"
      },
      "private": false,
      "pulls_url": "https://api.github.com/repos/bling-yshs/action-test/pulls{/number}",
      "pushed_at": "2024-08-04T05:14:31Z",
      "releases_url": "https://api.github.com/repos/bling-yshs/action-test/releases{/id}",
      "size": 7429,
      "ssh_url": "git@github.com:bling-yshs/action-test.git",
      "stargazers_count": 0,
      "stargazers_url": "https://api.github.com/repos/bling-yshs/action-test/stargazers",
      "statuses_url": "https://api.github.com/repos/bling-yshs/action-test/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/bling-yshs/action-test/subscribers",
      "subscription_url": "https://api.github.com/repos/bling-yshs/action-test/subscription",
      "svn_url": "https://github.com/bling-yshs/action-test",
      "tags_url": "https://api.github.com/repos/bling-yshs/action-test/tags",
      "teams_url": "https://api.github.com/repos/bling-yshs/action-test/teams",
      "topics": [],
      "trees_url": "https://api.github.com/repos/bling-yshs/action-test/git/trees{/sha}",
      "updated_at": "2024-08-04T05:14:35Z",
      "url": "https://api.github.com/repos/bling-yshs/action-test",
      "visibility": "public",
      "watchers": 0,
      "watchers_count": 0,
      "web_commit_signoff_required": false
    },
    "schedule": "*/5 * * * *",
    "workflow": ".github/workflows/test.yml"
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "main",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workflow_ref": "bling-yshs/action-test/.github/workflows/test.yml@refs/heads/main",
  "workflow_sha": "4df5bbbf01313fb842e99f6d3385ed6d23c0ff10",
  "workspace": "/home/runner/work/action-test/action-test",
  "action": "__run_2",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_83114d6d-170c-43cd-a28d-28d1f20b5cca",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_83114d6d-170c-43cd-a28d-28d1f20b5cca",
  "step_summary": "/home/runner/work/_temp/_runner_file_commands/step_summary_83114d6d-170c-43cd-a28d-28d1f20b5cca",
  "state": "/home/runner/work/_temp/_runner_file_commands/save_state_83114d6d-170c-43cd-a28d-28d1f20b5cca",
  "output": "/home/runner/work/_temp/_runner_file_commands/set_output_83114d6d-170c-43cd-a28d-28d1f20b5cca"
}
</code>
</pre>
</details>

```yaml
- name: 开启 SSH 服务 (Start SSH service)
  uses: lhotari/action-upterm@v1
  with:
    wait-timeout-minutes: 20
```

#### 把步骤输出到 output 供后续使用

```yaml
- name: Set the output
  id: get-time
  run: echo "now=$(TZ='Asia/Shanghai' date +"%Y-%m-%d")" >> "$GITHUB_OUTPUT"
```

```yaml
- name: Get the output
  run: echo "The time was ${{ steps.get-time.outputs.now }}"
```

#### 发布 Release

```yaml
  - name: 上传编译结果到 Release (Upload build result to Release)
    uses: ncipollo/release-action@v1
    with:
      token: ${{ secrets.GITHUB_TOKEN }}
      name: 25.1.29
      tag: 25.1.29
      artifacts: |
        ./README.md
```
tag 会自己创建，不需要手动创建

#### Artifacts 取消嵌套

```yaml
  - name: 合并构建产物 (Merge artifacts)
    uses: actions/upload-artifact/merge@v4
    with:
      name: merged-artifacts
```
或者
```yaml

  - name: 下载 Artifact (Download Artifact)
    uses: actions/download-artifact@v4
    with:
      path: ./download
      name: merged-artifacts
      merge-multiple: true

```
