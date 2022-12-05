import { createApp } from 'vue'
import App from './App.vue'
// import Varlet from '@varlet/ui'
// import '@varlet/ui/es/style.js'
import router from '@/router'
const app = createApp(App)
// app.use(Varlet)
app.use(router)
app.mount('#app')
