<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">おいしいピザ</nuxt-link>
    <nuxt-link to="/" class="brand">Cart 0</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2em;
  color: black;
  text-decoration: none;
}
.nav {
  display: flex;
  border-bottom: 3px solid black;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}
</style>
