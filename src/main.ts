import { createApp } from 'vue';
import App from './App.vue';

import 'ant-design-vue/dist/reset.css';
//svg插件需要配置代码
import 'virtual:svg-icons-register';
//引入路由
import router from './router';
//引入仓库
// import pinia from './store';

const app = createApp(App);
//注册模板路由
app.use(router);
//将应用挂载到挂载点上
app.mount('#app');
