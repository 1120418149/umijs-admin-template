<!--
 * @Author: Jack.zhang
 * @Date: 2021-01-13 14:02:45
 * @LastEditors: Jack.zhang
 * @LastEditTime: 2021-02-03 13:59:55
-->

# umi project

## Getting Started

Install dependencies,

```bash
yarn
```

Start the dev server,

```bash··
yarn start
```

## git 提交规范

遵循 Conventional Commits 规范，格式为`<类型>[可选的作用域]: <描述>`，常用类型值：

- feat: 在代码库中新增了一个功能
- fix: 在代码库中修复了一个 bug
- docs: 文档更新
- chore: 构建过程或辅助工具变动
- refactor: 重构（既不是新增功能，也不是 bug 修复）

eg：`feat: add Map comp`

## git 更新规范

带 rebase 更新，

```bash

# 暂存本地新增或改动代码（无改动，此操作可以省略）
git stash save change

# 拉去远程代码
git pull origin master --rebase

# 释放本地暂存的代码（默认为最新的缓存）
git stash pop

```

更多实践可参考：<http://www.aslinwang.com/2019/06/git-rebase/>

## code review 规范

详见：<http://www.aslinwang.com/2019/07/git-cr/>
