<template>
  <div>
    <section class="hero--area section-padding-80">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-12 col-md-7 col-lg-8">
            <video-tab-content />
          </div>
          <div class="col-12 col-md-5 col-lg-4">
            <video-tab-nav />
          </div>
        </div>
      </div>
    </section>
    <trending-post />
    <featured-video />
  </div>
</template>

<script>
import FeaturedVideo from '~/components/videos/FeaturedVideo.vue'
import TrendingPost from '~/components/videos/TrendingPost.vue'
import VideoTabContent from '~/components/videos/VideoTabContent.vue'
import VideoTabNav from '~/components/videos/VideoTabNav.vue'
import { mernPlaylist } from '~/utils'
export default {
  name: 'IndexPage',
  components: { VideoTabNav, VideoTabContent, TrendingPost, FeaturedVideo },
  fetch(ctx) {
    ctx.store.dispatch(
      'videos/changeLatest',
      mernPlaylist.filter((video) => video.latest)
    )
    ctx.store.dispatch(
      'videos/changeTrending',
      mernPlaylist.filter((video) => video.trending)
    )
    ctx.store.dispatch('videos/changePlaylist', mernPlaylist)
    const randomNumber = Math.floor(Math.random() * 21)
    ctx.store.dispatch('videos/changePlayerVideo', mernPlaylist[randomNumber])
  },
}
</script>

<!-- this.$store.dispatch('setCount',30) -->
<!-- console.log(this.$store.state.counter) -->
<!-- return this.$store.state.users.name -->
<!-- Sayaç {{$store.state.counter}} -->
