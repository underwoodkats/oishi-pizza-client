<template>
  <div class="cart__page">
    <h1>Cart</h1>
    <div class="cart__container">
      <cart-record
        v-for="(cartRecord, index) in cart"
        :key="index"
        :cartRecord="cartRecord"
        :amount="cartRecord.amount"
        @update-cart="updateCart"
      />
    </div>
    <div>
      <h3>Order price: {{ priceOrder }} $</h3>
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
  date() {
    return {
      priceOrder: 0
    }
  },
  computed: mapState({ cart: (state) => state.restaurant.cart }),
  created() {
    this.totalPrice()
  },
  methods: {
    updateCart() {
      this.$forceUpdate()
      this.totalPrice()
    },
    totalPrice() {
      let total = 0
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].amount * this.cart[i].priceDollar
      }
      this.priceOrder = total
    }
  }
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
