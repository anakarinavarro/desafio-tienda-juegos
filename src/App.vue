<template>
  <div>
    <div>
      <NavBar />
    </div>
    <main>
      <div class="container">
        <transition mode="out-in" name="fade">
          <router-view />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style></style>
