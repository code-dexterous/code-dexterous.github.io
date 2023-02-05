<template>
  <section class="vizew-post-area mb-50">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-8">
          <div class="all-posts-area">
            <div class="section-heading style-2">
              <h4>Latest News</h4>
              <div class="line"></div>
            </div>

            <single-post-area
              v-for="video in $store.state.videos.playlists"
              :key="video.name"
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
            <follower-widget />

            <latest-video />

            <div class="single-widget newsletter-widget mb-50">
              <div class="section-heading style-2 mb-30">
                <h4>Newsletter</h4>
                <div class="line"></div>
              </div>
              <p>
                Subscribe our newsletter gor get notification about new updates,
                information discount, etc.
              </p>

              <div class="newsletter-form">
                <form action="#" method="post">
                  <input
                    id="emailnl"
                    type="email"
                    name="nl-email"
                    class="form-control mb-15"
                    placeholder="Enter your email"
                  />
                  <button type="submit" class="btn vizew-btn w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <most-viewed-playlist />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SinglePostArea from '../posts/SinglePostArea.vue'
import FollowerWidget from './FollowerWidget.vue'
import LatestVideo from './LatestVideo.vue'
import MostViewedPlaylist from './MostViewedPlaylist.vue'
export default {
  name: 'FeaturedVideo',
  components: {
    SinglePostArea,
    FollowerWidget,
    LatestVideo,
    MostViewedPlaylist,
  },
}
</script>
