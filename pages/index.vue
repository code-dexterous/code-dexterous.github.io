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
    <li v-for="side in $store.state.videos.playlists" :key="side.name">
      {{ side.name }}
    </li>
  </div>
</template>

<script>
import FeaturedVideo from '~/components/videos/FeaturedVideo.vue'
import TrendingPost from '~/components/videos/TrendingPost.vue'
import VideoTabContent from '~/components/videos/VideoTabContent.vue'
import VideoTabNav from '~/components/videos/VideoTabNav.vue'
export default {
  name: 'IndexPage',
  components: { VideoTabNav, VideoTabContent, TrendingPost, FeaturedVideo },
  fetch(ctx) {
    ctx.store.dispatch('videos/changePlaylist', [
      {
        image: '21.jpg',
        timeline: '05.03',
        badge: 'Sports',
        title: 'May fights on after Johnson savages Brexit approach',
        author: 'Jane',
        date: 'Sep 08, 2018',
        description:
          'Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.',
      },
      {
        image: '22.jpg',
        timeline: '05.03',
        badge: 'Game',
        title: "Thailand cave rescue: Boys 'doing well' after spending night",
        author: 'Jane',
        date: 'Sep 08, 2018',
        description:
          'Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.',
      },
      {
        image: '23.jpg',
        timeline: '05.03',
        badge: 'Business',
        title: 'Theresa May battles Brexiteer backlash amid disquiet',
        author: 'Jane',
        date: 'Sep 08, 2018',
        description:
          'Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.',
      },
      {
        image: '24.jpg',
        timeline: '05.03',
        badge: 'Game',
        title: 'Theresa May battles Brexiteer backlash amid disquiet',
        author: 'Jane',
        date: 'Sep 08, 2018',
        description:
          'Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.',
      },
    ])
  },
}
</script>

<!-- this.$store.dispatch('setCount',30) -->
<!-- console.log(this.$store.state.counter) -->
<!-- return this.$store.state.users.name -->
<!-- Sayaç {{$store.state.counter}} -->
