import Vuex from 'vuex'
import Vue from 'vue'
import app from './modules/app'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    app
  }
})
