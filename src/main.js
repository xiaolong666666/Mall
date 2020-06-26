import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import LyTab from 'ly-tab'
import { Indicator, Actionsheet, DatetimePicker }  from 'mint-ui';
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/css/swiper.min.css'
import 'mint-ui/lib/style.css'
import '@/assets/iconfont/style.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(LyTab)
Vue.use(Indicator)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(DatetimePicker.name, DatetimePicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
