<template>
  <div class="menu__container">
    <div class="menu__layout">
      <img src="@/static/main-layout.jpeg" alt="layout" class="menu__image" />
    </div>
    <div class="menu__menu-block">
      <div class="menu__items-container">
        <item-card v-for="(item, index) in items" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemCard from '~/components/ItemCard'
export default {
  components: {
    ItemCard
  },
  computed: mapState({ items: (state) => state.restaurant.items }),
  async created() {
    await this.$store.dispatch('restaurant/fetchItems')
  }
}
</script>

async fetch({ store }) { await store.dispatch('cafe/fetchIngredients') }, }

<style>
.menu__container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.menu__menu-block {
  margin-top: 20px;
}
.menu__items-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 2%;
  margin-bottom: 20px;
}
.menu__layout {
  margin-top: 35px;
  border-bottom: 3px solid black;
}
.menu__image {
  height: auto;
}
</style>
