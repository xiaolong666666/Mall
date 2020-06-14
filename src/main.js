import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import LyTab from 'ly-tab'
import 'styles/reset.css'
import 'styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(LyTab)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
