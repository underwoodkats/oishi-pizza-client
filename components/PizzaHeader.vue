<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">おいしいピザ</nuxt-link>
    <div v-if="cartCount > 0">
      <nuxt-link to="/cart" class="brand">Cart {{ cartCount }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState({ cartCount: (state) => state.restaurant.cartCount })
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
