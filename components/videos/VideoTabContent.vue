<template>
  <div v-if="player" class="tab-content">
    <div
      id="post-1"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="post-1-tab"
    >
      <div
        class="single-feature-post video-post bg-img"
        :style="{
          backgroundImage: `url(${require('~/assets/imgs/' + player.image)})`,
        }"
      >
        <a href="video-post.html" class="btn play-btn">
          <font-awesome-icon :icon="['fas', 'play']" aria-hidden="true" />
        </a>

        <div class="post-content">
          <a href="#" class="post-cata">{{ player.badge }}</a>
          <a href="single-post.html" class="post-title">{{ player.title }}</a>
          <div class="post-meta d-flex">
            <a href="#">
              <font-awesome-icon
                :icon="['fas', 'comments']"
                aria-hidden="true"
              />
              25
            </a>
            <a href="#">
              <font-awesome-icon :icon="['fas', 'eye']" aria-hidden="true" /> 25
            </a>
            <a href="#">
              <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                aria-hidden="true"
              />
              25
            </a>
          </div>
        </div>

        <span class="video-duration">{{ player.timeline }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoTabContent',
  computed: {
    player() {
      return this.$store.state.videos.playerVideo
    },
  },
}
</script>
