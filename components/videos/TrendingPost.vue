<template>
  <section class="trending-posts-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading">
            <h4>Trending Videos</h4>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <trending-post-area
          v-for="video in $store.state.videos.trendings"
          :key="video.id"
          :image="video.image"
          :timeline="video.timeline"
          :badge="video.badge"
          :title="video.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TrendingPostArea from '../posts/TrendingPostArea.vue'
export default {
  name: 'TrendingPost',
  components: { TrendingPostArea },
}
</script>
