# vue-admin

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue Project Settings

```
Vue CLI v5.0.4
? Please pick a preset:
  Default ([Vue 2] babel, eslint)
  Default (Vue 3) ([Vue 3] babel, eslint)
> Manually select features  // 选择手动配置

// ----------------------------------------------------------

? Check the features needed for your project:
 (*) Choose Vue version // 选择 vue 版本
 (*) Babel // 使用 babel
 ( ) TypeScript // 不使用 ts
 ( ) Progressive Web App (PWA) Support // 不使用 PWA
 (*) Router // 添加 vue-router
 (*) Vuex // 添加 vuex
>(*) CSS Pre-processors // 使用 css 预处理器
 (*) Linter / Formatter // 代码格式化
 ( ) Unit Testing // 不配置测试
 ( ) E2E Testing  // // 不配置测试

// ----------------------------------------------------------

 Choose a version of Vue.js that you want to start the project with
  2.x
> 3.x // 选择 vue 3.0 版本

// ----------------------------------------------------------

 Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n // 不使用 history模式 的路由

// ----------------------------------------------------------

 ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
> Sass/SCSS (with dart-sass) // 使用基于 dart-sass 的 scss 预处理器
  Sass/SCSS (with node-sass)
  Less
  Stylus

// ----------------------------------------------------------

? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config // 使用 ESLint 标准代码格式化方案
  ESLint + Prettier

// ----------------------------------------------------------

? Pick additional lint features:
 (*) Lint on save //
>(*) Lint and fix on commit  // 保存时 && 提交时，都进行 lint

// ----------------------------------------------------------

? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files // 单独的配置文件
  In package.json

// ----------------------------------------------------------

 Save this as a preset for future projects? (y/N) n // 不存储预设
```

## 配置 Prettier 文件

配置 `.prettierrc` 文件之后需要在 VS Code 的设置中勾选 `Format on Save` 实现保存文件时格式化的效果
_提示：ESLint 规则中识别的 Tab 为两个空格，VSCode 默认为四个空格，须在设置中的 Tab Size 做调整_

**如果配置后格式化未生效**

- 可能原因是 `Prettier` 与其他格式化插件存在冲突
- 在需要格式化的文件代码界面邮件选择 `使用...格式化代码`
- 在弹出框中选择 `配置默认格式化程序` 切换至 `Prettier` 即可

**ESLint 和 Prettier 之间的冲突**

配置 `.eslintrc.js` 中添加规则：`'space-before-function-paren': 'off'` 解决唯一的冲突问题
