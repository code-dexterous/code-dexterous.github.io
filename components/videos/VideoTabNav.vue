<template>
  <ul class="nav vizew-nav-tab" role="tablist">
    <video-tab-nav-item
      v-for="video in $store.state.videos.playlists"
      :key="video.id"
      :image="video.image"
      :title="video.title"
      comments="25"
      views="11"
      likes="19"
    />
  </ul>
</template>

<script>
import VideoTabNavItem from './VideoTabNavItem.vue'
export default {
  name: 'VideoTabNav',
  components: { VideoTabNavItem },
}
</script>
