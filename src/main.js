import { createApp } from 'vue';
import App from './App.vue';

// ant design vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// ant design vue icon
import * as Icons from '@ant-design/icons-vue';

// 路由
import router from './router';

const app = createApp(App);
app.use(Antd);
app.use(router);

// 全局注册所有图标组件
for (const i in Icons) {
    app.component(i, Icons[i]);
}

app.mount('#app');
