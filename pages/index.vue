<template>
  <div class="container">
    <div class="images">
      <img src="@/static/japan.png" alt="japan" class="img-japan" />
      <img src="@/static/japan.png" alt="japan" class="img-japan" />
      <img src="@/static/japan.png" alt="japan" class="img-japan" />
    </div>
    <div class="menu">
      <div class="items-container">
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
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.menu {
  margin-top: 20px;
}
.items-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 2%;
}
.images {
  border-bottom: 3px solid black;
}
.img-japan {
  max-width: 32%;
  height: auto;
}
</style>
