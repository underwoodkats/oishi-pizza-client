<template>
  <div class="cart__page">
    <h1>Cart</h1>
    <div class="cart__container">
      <cart-record
        v-for="(cartRecord, index) in cart"
        :key="index"
        :cartRecord="cartRecord"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartRecord from '~/components/CartRecord'

export default {
  name: 'Cart',
  components: {
    CartRecord
  },
  computed: mapState({ cart: (state) => state.restaurant.cart })
}
</script>

<style scoped>
.cart__page {
  padding: 20px;
}
.cart__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
