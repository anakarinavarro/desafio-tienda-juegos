import Axios from 'axios'

export const gamesModules = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList
    },

    ADD_STOCK(state, indice) {
      state.list[indice].stock++
    },
    REMOVE_STOCK(state, indice) {
      state.list[indice].stock--
    },
    SET_COLOR(state, { indice, nuevoColor }) {
      state.list[indice].color = nuevoColor
    },
  },
  actions: {
    async getAllGames(context) {
      try {
        if (context.state.list.length === 0) {
          const games = await Axios.get('/juegos.json')
          context.commit('SET_LIST', games.data)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  incrementarStock(context, findGames) {
    const list = context.state.list
    const indice = list.findIndex((list) => list.codigo === findGames.codigo)
    context.commit('ADD_STOCK', indice)
  },
  disminuirStock(context, findGames) {
    const list = context.state.list
    const indice = list.findIndex((list) => list.codigo === findGames.codigo)
    if (list[indice].stock > 0) {
      context.commit('REMOVE_STOCK', indice)
    }
  },
  cambiarColor(context, { findGames, nuevoColor }) {
    const list = context.state.list
    const indice = list.findIndex((list) => list.codigo === findGames.codigo)
    context.commit('SET_COLOR', { indice, nuevoColor })
    if (nuevoColor === 'blue') {
      console.log('el color es azul')
    }
  },
}
