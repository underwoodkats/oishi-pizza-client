<template>
  <div class="information__container">
    <div class="information__text">
      <h4>
        <slot></slot>
      </h4>
    </div>
    <div class="information__button-container">
      <button @click="goMainPage" class="information__button">
        Main Page
      </button>
    </div>
    <div class="order-form__text-and-image">
      <img
        src="@/static/pizza-round.jpg"
        alt="japan"
        class="information__image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  methods: {
    goMainPage() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped>
.information__container {
  display: flex;
  flex-direction: column;
}

.information__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}

.information__button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.information__button {
  cursor: pointer;
  min-width: 150px;
  min-height: 60px;
}
.information__image {
  margin-top: 30px;
  width: 25%;
  height: auto;
}
</style>
