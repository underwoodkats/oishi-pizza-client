<template>
  <div class="item-card__container -shadow">
    <div>
      <img :src="getImagePath()" class="item-card__image" />
    </div>
    <div>
      <h5 class="item-card__title">{{ item.title }}</h5>
      <h6 class="item-card__description">{{ item.description }}</h6>
    </div>
    <div class="item-card__price-and-confirmation">
      <h5 class="item-card__title">{{ item.priceDollar }}$</h5>
      <div class="item-card__button-container">
        <button
          v-if="!isElementAlreadyInCart"
          @click="addItemToTheCart"
          type="button"
          class="item-card__button"
        >
          Add to the cart
        </button>
        <button v-else @click="addMore" type="button" class="item-card__button">
          Add more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({ cart: (state) => state.restaurant.cart }),
    isElementAlreadyInCart() {
      return this.$store.state.restaurant.cart.some(
        (item) => item.id === this.item.id
      )
    }
  },
  methods: {
    addItemToTheCart() {
      this.isElementAlreadyInCart = true
      this.$store.dispatch('restaurant/addItemToTheCart', this.item)
    },
    getImagePath() {
      return 'http://localhost:8080/resources/image/' + this.item.imagePath
    },
    addMore() {
      this.$store.dispatch('restaurant/increaseItemAmountInCart', this.item.id)
    }
  }
}
</script>

<style scoped>
.item-card__container {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: auto;
  padding: 20px;
  margin: 10px 10px 10px;
  transition: all 0.2s linear;
}
h5,
h6 {
  margin: 0;
}
h6 {
  font-weight: 100;
}
.item-card__button {
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 60px;
  cursor: pointer;
}
.item-card__price-and-confirmation {
  display: flex;
  justify-content: space-around;
}
.item-card__image {
  max-width: 60%;
  height: auto;
}
.item-card__title {
  text-align: left;
}
.item-card__description {
  display: flex;
  align-items: flex-start;
  text-align: left;
  min-height: 55px;
}
.item-card__button-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
