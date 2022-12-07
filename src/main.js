import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import Varlet from '@varlet-vue2/ui'
import '@varlet-vue2/ui/es/style.js'
Vue.use(Varlet)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
