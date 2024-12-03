# 基座工程说明文档

## 前言

### 1. 介绍

PC 端项目开发基座，包含技术栈说明、目录说明、使用方式和规范等。

### 2. 项目启动

**环境配置，推荐安装版本：**  
Node（18.20.4）、Pnpm （9.9.0）  
**启动命令：**

```
pnpm install
pnpm dev
```

## 一、技术说明

### 1. 核心技术栈

| 技术         | 介绍         | 版本    |
| :----------- | :----------- | :------ |
| vite         | 开发构建工具 | 4.1.4   |
| vue          | Js 框架      | 3.2.47  |
| element-plus | UI 框架      | 2.3.6   |
| typescript   | Js 超集      | 4.9.5   |
| axios        | 请求库       | 1.3.4   |
| pinia        | Vue 存储库   | 2.0.32  |
| mitt         | 事件总线     | 3.0.0   |
| vue-router   | 路由         | 4.1.6   |
| sass         | Css 预处理   | 1.62.1  |
| crypto-js    | 加解密       | 4.1.1   |
| vueuse       | Vue Hooks 库 | 9.13.0  |
| dayjs        | 日期处理     | 1.11.7  |
| echarts      | 图表         | 5.4.0   |
| leaflet      | 地图         | 1.9.3   |
| lodash       | 工具库       | 4.17.12 |
| qs           | 序列化       | 6.11.0  |
| vue-i18n     | 国际化       | 9.2.2   |

### 2. vite 插件集成

- unplugin-auto-import（按需加载，自动引入）
- unplugin-vue-components（按需加载，自动引入组件）
- vite-plugin-compression（开启.gz 压缩）
- vite-plugin-imagemin（图片压缩）
- vite-plugin-progress（构建显示进度条）
- vite-plugin-restart（监听配置文件修改自动重启 Vite）
- vite-plugin-svg-icons（加载 SVG 文件，自动引入）
- rollup-plugin-visualizer（打包分析）

### 3. 统一开发规范

Eslint + prettier + stylelint 帮助规范开发代码，有助于提高团队的代码质量和协作性。

### 4.推荐 vscode 插件

- Vue Language Features (Volar)
- Prettier - Code formatter

## 二、项目说明

### 1. 目录结构说明

|--- .husky // git hooks，暂未使用  
|--- .vscode // vscode 配置  
|--- build // 构建配置  
|---|--- vite // vite 各类插件  
|---|--- constant.ts // 常量配置，比如启动端口、代理地址等  
|--- mock // mock 数据配置，暂未使用  
|--- plop-tpls // 快速生成模板文件，暂未使用  
|--- public // 放置外部引用 js 和 ico 文件  
|--- src // 构建配置  
|---|--- api // 公共请求接口  
|---|--- assets // 公共资源，如字体、icon、图片、样式文件  
|---|--- components // 公共组件  
|---|--- hooks // 公共 hook  
|---|--- layout // 公共布局  
|---|--- locales // 国际化文件  
|---|--- router // 路由  
|---|--- store // pinia 存储  
|---|--- utils // 工具函数  
|---|--- views // 页面  
|---|--- App.vue // 入口页面  
|---|--- main.ts // 入口 ts  
|--- types // 自动引入的配置（自动生成）  
|--- .env // 全局默认配置文件，属性名必须以 VITE_APP 开头。调用：import.meta.env.xxx。  
|--- .env.development // 开发环境默认配置，使用方式同上  
|--- .env.production // 生产环境默认配置，使用方式同上  
|--- .env.test // 测试环境默认配置，使用方式同上  
|--- .eslintignore // eslint 忽略文件  
|--- .eslintrc.js // eslint 配置  
|--- .gitignore // git 忽略文件  
|--- .npmrc // npm 配置  
|--- .prettierignore // prettier 忽略文件  
|--- .stylelintignore // stylelint 忽略文件  
|--- index.html // 入口 html 文件  
|--- package.json // 包信息  
|--- plopfile.js // 搭配 plop 使用  
|--- postcss.config.js // postcss 配置  
|--- prettier.config.js // prettier 配置  
|--- README.md // 说明文档  
|--- stylelint.config.js // stylelint 配置  
|--- tsconfig.json // typescript 配置  
|--- vite.config.ts // vite 配置

### 2. 常用操作说明

**2.1 新增页面**  
在@/views 下根据层级关系创建文件夹，名称和路由尽量保持一致，入口文件为 index.vue。内部组件放置同级 components 文件夹下，接口放置 interface.ts 文件中。

**2.2 新增组件**  
公共组件放置@/components 下，内部组件参考上述新增页面。

**2.3 使用字体**  
字体文件放置在@/assets/fonts 下，在@/assets/styles/font.less 内进行声明，最后在使用位置 font-family 声明即可。

**2.4 使用图片**  
图片放置@/assets/images 下，最好自建文件夹进行分类区别。background 通过 url(‘@/assets/images/xxx’)使用。属性绑定通过 import myImg from ‘@/assets/images/xxx’使用。

**2.5 使用 svg**  
Svg 放置在@/assets/icons 下，通过公共组件<SvgIcon name=”xxx” /> 使用（已全局注册，无需引入）。name 为层级名称’-’svg 文件名称，如 icons 文件夹下，home 文件夹下 setting.svg，则 name 为 home-setting。

**2.6 调用接口**  
通过封装好的 axios 暴露出的函数调用，import { get, post } from '@/utils/http/axios'，返回 Promise，接口调通皆是 200，通过内部 code 码来区分状态。对接口异常已做全局错误处理，需要自行处理 loading 状态使用 try catch 包裹，或使用 catch()捕获。

**2.7 组件通信**  
除了使用 storage 外，可以使用 pinia 存储或 mitt 事件总线。

**2.8 更改代理**  
build/constant.ts 进行配置，更改 API_TARGET_URL，如需更多规则，更改 build/vite/proxy.ts。

### 3. 项目打包

`pnpm run build` 即可，但是会先进行 tslint 校验，所以平时注意修复 tslint 的问题，不要忽略。
