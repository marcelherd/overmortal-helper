import './assets/main.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-pink/theme.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.mount('#app');
