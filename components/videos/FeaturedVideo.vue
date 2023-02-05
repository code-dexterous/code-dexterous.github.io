<template>
  <section class="vizew-post-area mb-50">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-8">
          <div class="all-posts-area">
            <div class="section-heading style-2">
              <h4>Latest Videos</h4>
              <div class="line"></div>
            </div>

            <single-post-area
              v-for="video in $store.state.videos.latests"
              :key="video.id"
              :image="video.image"
              :timeline="video.timeline"
              :badge="video.badge"
              :title="video.title"
              :author="video.author"
              :date="video.date"
              :description="video.description"
            />
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-4">
          <div class="sidebar-area">
            <!-- <latest-video />
            <most-viewed-playlist /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SinglePostArea from '../posts/SinglePostArea.vue'
// import LatestVideo from './LatestVideo.vue'
// import MostViewedPlaylist from './MostViewedPlaylist.vue'
export default {
  name: 'FeaturedVideo',
  components: {
    SinglePostArea,
    // LatestVideo,
    // MostViewedPlaylist,
  },
}
</script>
