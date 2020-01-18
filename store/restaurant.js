import RestaurantService from '../services/RestaurantService'

export const state = () => ({
  items: [],
  cart: [],
  cartCount: 0
})

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload
  },
  ADD_ITEM_TO_CART(state, payload) {
    state.cart.push(payload)
  },
  INCREASE_ITEM_AMOUNT(state, itemId) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === itemId) {
        state.cart[i].amount += 1
      }
    }
  },
  INCREASE_CART_COUNT(state) {
    state.cartCount += 1
  },
  DECREASE_CART_COUNT(state, amount) {
    state.cartCount -= amount
  },
  REMOVE_ITEM(state, id) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === id) {
        state.cart.splice(i, 1)
      }
    }
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
  addItemToTheCart({ commit, state }, item) {
    item.amount = 1
    commit('ADD_ITEM_TO_CART', item)
    commit('INCREASE_CART_COUNT')
  },
  increaseItemAmountInCart({ commit }, itemId) {
    commit('INCREASE_ITEM_AMOUNT', itemId)
    commit('INCREASE_CART_COUNT')
  },
  removeItem({ commit }, { id, amount }) {
    commit('REMOVE_ITEM', id)
    commit('DECREASE_CART_COUNT', amount)
  }
}
