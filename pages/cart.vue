<template>
  <div class="cart__page">
    <h1>{{ stage }}</h1>
    <div v-if="cart.length > 0 && stage === 'Cart'" class="cart__container">
      <div class="cart__items-container">
        <cart-record
          v-for="(cartRecord, index) in cart"
          :key="index"
          :cartRecord="cartRecord"
          :amount="cartRecord.amount"
          @update-cart="updateCart"
        />
      </div>
      <div>
        <payment-card
          :priceOrder="priceOrder"
          :deliveryPrice="deliveryPrice"
          @change-stage="changeStage"
        />
      </div>
    </div>
    <div
      v-if="cart.length > 0 && stage === 'Checkout'"
      class="checkout__container"
    >
      <OrderForm />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartRecord from '~/components/CartRecord'
import PaymentCard from '~/components/PaymentCard'
import OrderForm from '~/components/OrderForm'

export default {
  name: 'Cart',
  components: {
    CartRecord,
    PaymentCard,
    OrderForm
  },
  data() {
    return {
      priceOrder: 0,
      deliveryPrice: 5,
      stage: 'Cart'
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
    },
    changeStage(nextStage) {
      this.stage = nextStage
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
  flex-direction: row;
}
.cart__items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
