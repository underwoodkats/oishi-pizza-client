<template>
  <div class="pizza-header">
    <div class="pizza-header-block">
      <nuxt-link to="/"
        ><img src="@/static/label.jpeg" alt="japan" class="pizza-header__logo"
      /></nuxt-link>
      <div v-if="cartCount > 0">
        <nuxt-link to="/cart" class="pizza-header__cart"
          >Cart {{ cartCount }}</nuxt-link
        >
      </div>
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
.pizza-header {
  position: fixed;
  width: 100%;
  background: white;
}
.pizza-header__cart {
  font-weight: 500;
  font-size: 2em;
  text-decoration: none;
  color: white;
  background: black;
  padding: 5px 15px;
}
.pizza-header-block {
  display: flex;
  border-bottom: 3px solid black;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}
.pizza-header__logo {
  margin-top: 10px;
  max-height: 45px;
  width: auto;
}
</style>
