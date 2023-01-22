import { createApp } from 'vue'
import VueAos from 'vue-aos'

import '@/styles/main.scss'
import App from '@/App.vue'
import clickOutside from '@/directives/clickOutside'

const app = createApp(App)
app.use(VueAos)
app.directive('clickOut', clickOutside)

app.mount('#app')
