<template>
  <div>
    <hooper
      :centerMode="true"
      style="height: 400px"
      :infiniteScroll="true"
      :progress="true"
      :autoPlay="true"
      :playSpeed="2000"
    >
      >
      <slide v-for="(listGame, $index) of listGames" :key="$index" :slide="$index">
        <img :src="listGame.cover" alt="" />
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'

//import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  computed: {
    ...mapState('gamesList', {
      listGames: (state) => state.list,
    }),
  },
}
</script>

<style>
.hooper-slide img {
  height: 400px;
}
.hooper-slide {
  text-align: center;
}
</style>
