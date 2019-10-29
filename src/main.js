import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import VueHotkey from 'v-hotkey'
import VScrollLock from 'v-scroll-lock'

import './assets/scss/style.scss'
import 'vuescroll/dist/vuescroll.css'

Vue.use(VueHotkey)
Vue.use(vuescroll)
Vue.use(VScrollLock)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
