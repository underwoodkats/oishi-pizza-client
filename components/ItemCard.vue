<template>
  <div class="item-card-container -shadow">
    <div class="image-container">
      <img class="img-pizza" src="@/static/pizza-default.svg" />
    </div>
    <div class="information-container">
      <h5 class="item-title">{{ item.title }}</h5>
      <h6 class="item-title-description">{{ item.description }}</h6>
    </div>
    <div class="price-and-confirmation-container">
      <h3 class="item-title">{{ item.priceDollar }}$</h3>
      <div class="item-button-container">
        <button type="button" class="ingredient-card-button">
          Add to the cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      needConfirmation: false,
      initialAmount: null
    }
  }
}
</script>

<style scoped>
.item-card-container {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: auto;
  padding: 20px;
  margin: 10px 10px 10px;
  transition: all 0.2s linear;
  cursor: pointer;
}
span {
  font-size: 18px;
  margin-left: -20px;
}
h5,
h6 {
  margin: 0;
}
h6 {
  font-weight: 100;
}
.ingredient-card-button {
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 60px;
}
.image-container {
}
.information-container {
}
.price-and-confirmation-container {
  display: flex;
  justify-content: space-around;
}
.img-pizza {
  max-width: 60%;
  height: auto;
}
.item-title {
  text-align: left;
}
.item-title-description {
  display: flex;
  align-items: flex-start;
  text-align: left;
  min-height: 37px;
}
.item-button-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
