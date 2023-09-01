import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import router from "./router";
import Provider from './views/Provider.vue';
import naive from 'naive-ui';
import {createPinia} from 'pinia'
const pinia = createPinia();
const app = createApp(Provider);
app.use(pinia);
app.use(naive);
app.use(router);
app.mount('#app')
