import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import LyTab from 'ly-tab'
import { Indicator }  from 'mint-ui';
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/css/swiper.min.css'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(LyTab)
Vue.use(Indicator)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
