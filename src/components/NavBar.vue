<template>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="game-icon-png-22.jpeg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      Tienda de Juegos 32Bts
    </a>
    <ul class="navbar-nav d-flex flex-row">
      <li class="nav-item active pr-4">
        <router-link class="nav-link" to="/">
          <i class="fa fa-home" aria-hidden="true"></i>
        </router-link>
      </li>
      <li class="nav-item active pl-2">
        <router-link class="nav-link" to="/JuegosView"> JUEGOS </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
