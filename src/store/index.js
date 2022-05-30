import Vue from 'vue'
import Vuex from 'vuex'

import { gamesModules } from '@/store/modules/gamesList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gamesList: gamesModules,
  },
})
