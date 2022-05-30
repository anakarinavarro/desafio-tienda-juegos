<template>
  <div>
    <h1>Catalogo de Juegos</h1>
    <games-carrusel></games-carrusel>
  </div>
</template>

<script>
import Store from '@/store'
import GamesCarrusel from '@/components/GamesCarrusel.vue'

export default {
  components: {
    GamesCarrusel,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('gamesList/getAllGames')
    next()
  },
}
</script>
