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
          image="11.jpg"
          timeline="05.03"
          badge="Sports"
          title="Warner Bros. Developing ‘The accountant’ Sequel"
        />
        <trending-post-area
          image="12.jpg"
          timeline="05.03"
          badge="Game"
          title="Searching for the 'angel' who held me on Westminste Bridge"
        />
        <trending-post-area
          image="13.jpg"
          timeline="05.03"
          badge="Business"
          title="Love Island star's boyfriend found dead after her funeral"
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
