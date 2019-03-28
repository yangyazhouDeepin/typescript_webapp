import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultImg from '@/components/DefaultImg.vue'

import 'lib-flexible/flexible'
import '@/assets/stylus/index.styl'

Vue.config.productionTip = false
Vue.prototype.util = import('@/utils/util')

Vue.component('DefaultImg', DefaultImg)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
