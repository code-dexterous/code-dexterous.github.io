export const state = () => ({
  playlists: [],
  featuredVideos: [],
})

export const getters = {
  getPlaylists(state) {
    return state.playlists
  },
  getFeaturedVideos(state) {
    return state.featuredVideos
  },
}

export const mutations = {
  setPlaylists(state, payload) {
    state.playlists = payload
  },
  setFeaturedVideos(state, payload) {
    state.featuredVideos = payload
  },
}

export const actions = {
  changePlaylist(ctx, data) {
    ctx.commit('setPlaylists', data)
  },
  changeFeaturedVideos(ctx, data) {
    ctx.commit('setFeaturedVideos', data)
  },
}
