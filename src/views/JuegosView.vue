<template>
  <div>
    <div>
      <h1>Catalogo de Juegos</h1>
      <games-carrusel></games-carrusel>
    </div>
    <div>
      <GameTable />
    </div>
  </div>
</template>

<script>
import Store from '@/store'
import GamesCarrusel from '@/components/GamesCarrusel.vue'
import GameTable from '@/components/GameTable.vue'

export default {
  components: {
    GamesCarrusel,
    GameTable,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('gamesList/getAllGames')
    next()
  },
}
</script>
