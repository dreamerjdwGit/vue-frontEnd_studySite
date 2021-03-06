import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'
import question from './modules/question'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    question
  }
})
