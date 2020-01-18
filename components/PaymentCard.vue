<template>
  <div class="payment-card__container -shadow">
    <div class="payment-card__title">
      <h3 class="payment-card__title-text">Payment</h3>
    </div>
    <div class="payment-card__currency-container">
      <button
        :class="{ active: isUSD }"
        @click="switchCurrency"
        type="button"
        class="payment-card__button"
      >
        USD
      </button>
      <button
        :class="{ active: !isUSD }"
        @click="switchCurrency"
        type="button"
        class="payment-card__button"
      >
        EUR
      </button>
    </div>
    <div class="payment-card__details">
      <h4 class="payment-card__text">
        Order price:
        {{
          isUSD
            ? priceOrder.toFixed(2) + ' $'
            : (priceOrder * 0.9).toFixed(2) + ' €'
        }}
      </h4>
      <h4 class="payment-card__text">
        Price for the delivery:
        {{
          isUSD
            ? deliveryPrice.toFixed(2) + ' $'
            : (deliveryPrice * 0.9).toFixed(2) + ' €'
        }}
      </h4>
      <h3 class="payment-card__text">
        Total price:
        {{
          isUSD
            ? (priceOrder + deliveryPrice).toFixed(2) + ' $'
            : (priceOrder * 0.9 + deliveryPrice * 0.9).toFixed(2) + ' €'
        }}
      </h3>
    </div>
    <div class="payment-card__proceed">
      <button
        @click="proceedOrder"
        type="button"
        class="payment-card__button payment-card__button-proceed "
      >
        Proceed Order
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentCard',
  props: {
    priceOrder: {
      type: Number,
      required: true
    },
    deliveryPrice: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isUSD: true
    }
  },
  methods: {
    switchCurrency() {
      this.isUSD = !this.isUSD
    },
    proceedOrder() {
      this.$emit('change-stage', 'Checkout')
    }
  }
}
</script>

<style scoped>
.payment-card__container {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
}
.payment-card__title {
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
}
.payment-card__title-text {
  font-size: 14px;
}
.payment-card__currency-container {
  display: flex;
  flex-direction: row;
}
.payment-card__button {
  border-collapse: collapse;
  flex-grow: 1;
  margin: 0;
  cursor: pointer;
}
.active {
  background: #d53e1d;
}
.payment-card__proceed {
  display: flex;
  flex-direction: row;
}
.payment-card__button-proceed {
  height: 50px;
  flex-grow: 1;
  font-size: 20px;
}
.payment-card__details {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.payment-card__text {
  margin: 5px;
  font-size: 14px;
}
</style>
