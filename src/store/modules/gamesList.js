import Axios from 'axios'

export const gamesModules = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList
    },
    SET_lOADING(state, newLoading) {
      state.loading = newLoading
    },
  },
  actions: {
    async getAllGames(context) {
      context.commit('SET_LOADING', true)
      try {
        if (context.state.list.length === 0) {
          const games = await Axios.get('/juegos.json')
          context.commit('SET_LIST', games.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          context.commit('SET_LOADING', false)
        }, 2000)
      }
    },
  },
}
