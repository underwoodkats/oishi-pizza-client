<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">おいしいピザ</nuxt-link>
    <div v-if="cart.length > 0">
      <nuxt-link to="/cart" class="brand">Cart {{ cart.length }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState({ cart: (state) => state.restaurant.cart })
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
