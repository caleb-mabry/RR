import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import './registerServiceWorker'

Vue.use(VueAnalytics, {
  id: "UA-158287109-4",
  router
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
