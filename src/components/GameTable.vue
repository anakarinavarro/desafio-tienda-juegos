<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Color</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(listGame, $index) of listGames"
          :key="$index"
          :style="{ color: listGame.color }"
        >
          <td>{{ listGame.codigo }}</td>
          <td>
            <select :value="listGame.color" @change="cambiarColorAUnJuego(listGame, $event)">
              <option :value="color.value" v-for="(color, $index) in colores" :key="$index">
                {{ color.label }}
              </option>
            </select>
          </td>
          <td>{{ listGame.nombre }}</td>
          <td>{{ listGame.stock }}</td>
          <td>{{ listGame.precio }}</td>
          <td>
            <button @click="incrementarStock(listGame)">+</button>
            <button @click="disminuirStock(listGame)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    colores: [
      { value: 'red', label: 'Rojo' },
      { value: 'blue', label: 'Azul' },
      { value: 'green', label: 'Verde' },
      { value: 'black', label: 'Negro' },
    ],
  }),
  computed: {
    ...mapState('gamesList', {
      listGames: (state) => state.list,
    }),
  },
  methods: {
    ...mapActions('gamesList', ['incrementarStock', 'disminuirStock', 'cambiarColor']),
    cambiarColorAUnJuego(listGame, event) {
      this.cambiarColor({
        findGames: listGame,
        nuevoColor: event.target.value,
      })
    },
  },
}
</script>

<style></style>
