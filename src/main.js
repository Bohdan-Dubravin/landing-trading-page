import { createApp } from 'vue';
import '@/styles/main.scss';
import App from '@/App.vue';
import VioletButton from '@/components/UI/VioletButton.vue';
const app = createApp(App);
app.component('VioletButton', VioletButton);

createApp(App).mount('#app');
