import RestaurantService from '../services/RestaurantService'

export const state = () => ({
  items: []
})

export const mutations = {
  SET_ITEMS(state, payload) {
    state.items = payload
  }
}

export const actions = {
  fetchItems({ commit }) {
    return RestaurantService.fetchItems().then((response) => {
      commit('SET_ITEMS', response)
    })
  }
}
