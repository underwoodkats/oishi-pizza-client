<template>
  <div class="order-confirmation__container">
    <div class="order-confirmation__text">
      <h4>
        Your order has been successfully accepted, you can go to the main page.
      </h4>
    </div>
    <div class="order-confirmation__button-container">
      <button @click="goMainPage" class="order-confirmation__button">
        Main Page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation',
  methods: {
    goMainPage() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped>
.order-confirmation__container {
  display: flex;
  flex-direction: column;
}
.order-confirmation__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
.order-confirmation__button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-confirmation__button {
  cursor: pointer;
  min-width: 150px;
  min-height: 60px;
}
</style>
