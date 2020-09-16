import Vue from 'vue'
import Vuex from 'vuex'
import Modules from './modules/modules.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Modules
  }
})
