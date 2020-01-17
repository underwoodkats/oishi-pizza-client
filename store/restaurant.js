import RestaurantService from '../services/RestaurantService'

export const state = () => ({
  items: [],
  cart: []
})

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload
  },
  ADD_ITEM_TO_CART(state, payload) {
    state.cart.push(payload)
  }
}

export const actions = {
  async fetchItems({ commit, state }) {
    if (state.items.length === 0) {
      await RestaurantService.fetchItems().then((response) => {
        commit('SET_ITEMS', response)
      })
    }
  },
  addItemToTheCart({ commit }, item) {
    commit('ADD_ITEM_TO_CART', { item })
  }
}
