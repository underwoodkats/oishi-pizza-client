<template>
  <div class="pizza-footer__container">
    <div class="pizza-footer__text-block">
      <nuxt-link to="/" class="pizza-footer__text text-link"
        >おいしいピザ</nuxt-link
      >
    </div>
    <div class="pizza-footer__text-block">
      <p class="pizza-footer__text text-small">© Igor Katselenbogen</p>
    </div>
    <div class="pizza-footer__text-block">
      <p class="pizza-footer__text text-small">2020, Tokyo</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaFooter'
}
</script>

<style scoped>
.pizza-footer__text {
  color: white;
  height: 30px;
}
.pizza-footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  background: black;
}
.pizza-footer__text-block {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text-small {
  font-size: 13px;
}
.text-link {
  font-size: 18px;
  text-decoration: none;
  font-weight: normal;
}
</style>
