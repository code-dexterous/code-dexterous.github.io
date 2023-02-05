export const state = () => ({
  playlists: [],
  featuredVideos: [],
  trendings: [],
  latests: [],
  playerVideo: null,
})

export const getters = {
  getPlaylists(state) {
    return state.playlists
  },
  getFeaturedVideos(state) {
    return state.featuredVideos
  },
  getTrending(state) {
    return state.trendings
  },
  getLatest(state) {
    return state.latests
  },
  getPlayerVideo(state) {
    return state.playerVideo
  },
}

export const mutations = {
  setPlaylists(state, payload) {
    state.playlists = payload
  },
  setFeaturedVideos(state, payload) {
    state.featuredVideos = payload
  },
  setTrending(state, payload) {
    state.trendings = payload
  },
  setLatest(state, payload) {
    state.latests = payload
  },
  setPlayerVideo(state, payload) {
    state.playerVideo = payload
  },
}

export const actions = {
  changePlaylist(ctx, data) {
    ctx.commit('setPlaylists', data)
  },
  changeFeaturedVideos(ctx, data) {
    ctx.commit('setFeaturedVideos', data)
  },
  changeTrending(ctx, data) {
    ctx.commit('setTrending', data)
  },
  changeLatest(ctx, data) {
    ctx.commit('setLatest', data)
  },
  changePlayerVideo(ctx, data) {
    ctx.commit('setPlayerVideo', data)
  },
}
