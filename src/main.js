import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible';
import '@/assets/style/reset.less'
import 'vant/lib/index.css';
import FastClick from 'fastclick'


FastClick.attach(document.body)
createApp(App).use(router).use(store).mount('#app')
