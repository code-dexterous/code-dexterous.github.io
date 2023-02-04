export const state = () => ({
  counter: 0,
})

export const getters = {
  getCount(state) {
    return state.counter
  },
}

export const mutations = {
  increment(state, payload) {
    state.counter = payload
  },
}

export const actions = {
  setCount(ctx, data) {
    ctx.commit('increment', data)
  },
}
