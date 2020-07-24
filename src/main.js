import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$version = '0.0.1'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
