import { createApp } from 'vue';
import '@/styles/main.scss';
import App from '@/App.vue';
import clickOutside from '@/directives/clickOutside';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(AOS.init());
app.directive('clickOut', clickOutside);

app.mount('#app');
