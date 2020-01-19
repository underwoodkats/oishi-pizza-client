<template>
  <div class="cart-record__row -shadow">
    <div class="cart-record__img">
      <img :src="getImagePath()" />
    </div>
    <div class="cart-record__title">
      <h6 class="cart-record__title-text">{{ cartRecord.title }}</h6>
    </div>
    <div class="cart-record__amount-control">
      <div v-if="amount > 1">
        <button @click="reduce" type="button" class="cart-record__icon">
          -
        </button>
      </div>
      <div v-if="amount <= 1">
        <button type="button" class="cart-record__icon empty-button"></button>
      </div>
      <div>
        <h5>{{ amount }}</h5>
      </div>
      <div>
        <button @click="addMore" type="button" class="cart-record__icon">
          +
        </button>
      </div>
    </div>
    <div class="cart_record__total-price">
      <h5>{{ cartRecord.priceDollar * amount }}$</h5>
    </div>
    <div>
      <button @click="removeItem" type="button" class="cart-record__icon">
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartRecord',
  props: {
    cartRecord: {
      type: Object,
      required: true
    },
    amount: {
      type: Number,
      requited: true,
      default: 0
    }
  },
  methods: {
    getImagePath() {
      return (
        'https://fierce-sea-08570.herokuapp.com/resources/image/' +
        this.cartRecord.imagePath
      )
    },
    addMore() {
      this.$store.dispatch(
        'restaurant/increaseItemAmountInCart',
        this.cartRecord.id
      )
      this.$emit('update-cart')
    },
    reduce() {
      this.$store.dispatch(
        'restaurant/reduceItemAmountInCart',
        this.cartRecord.id
      )
      this.$emit('update-cart')
    },
    removeItem() {
      this.$store.dispatch('restaurant/removeItem', {
        id: this.cartRecord.id,
        amount: this.cartRecord.amount
      })
    }
  }
}
</script>

<style scoped>
h5,
h6 {
  font-size: 18px;
  margin: 0;
}
h6 {
  font-weight: 100;
}
.cart-record__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 65%;
  padding: 20px;
  margin: 10px 0;
}
.cart-record__img {
  max-width: 15%;
  height: auto;
}
.cart-record__title {
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-record__title-text {
  font-size: 12px;
}
.cart-record__amount-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cart-record__icon {
  margin: 10px;
  display: flex;
  flex-direction: row;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.empty-button {
  border: 1px dashed black;
  background: white;
}
.cart_record__total-price {
  min-width: 7%;
}
</style>
