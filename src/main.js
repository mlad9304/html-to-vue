// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueHeadful from 'vue-headful'
import VueMask from 'v-mask'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'

Vue.component('vue-headful', vueHeadful)
Vue.use(VueMask)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
