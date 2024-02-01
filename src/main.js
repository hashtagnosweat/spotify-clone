import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';

import App from './App.vue';
import router from './router';
import './assets/main.css';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
const swiper = register();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(swiper);
app.use(router);

app.mount('#app');
