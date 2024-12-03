import { ConfigEnv } from 'vite';
import path from 'path';
import { createVitePlugins } from './vite/plugins';
import proxy from './vite/proxy';
// import { VITE_PORT } from './vite/constant';

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv) => {
  //获取各种环境下的对应的变量
  const isBuild = command === 'build';
  return {
    plugins: createVitePlugins(isBuild),
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
        '@home': path.resolve('./src/views/home/'), // 相对路径别名配置，使用 @home 代替 home
      },
    }, // scss全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
        },
      },
    },
    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 8000, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy,
      https: false,
    },
  };
};
