<template>
  <div>
    <h1>Cart</h1>
    {{ cart }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  computed: mapState({ cart: (state) => state.restaurant.cart })
}
</script>

<style scoped></style>
