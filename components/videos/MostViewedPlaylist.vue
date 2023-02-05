<template>
  <div class="single-widget mb-50">
    <div class="section-heading style-2 mb-30">
      <h4>Most Viewed Playlist</h4>
      <div class="line"></div>
    </div>
    <single-blog-post
      image="1.jpg"
      title="DC Shoes: gymkhana five; the making of"
    />
    <single-blog-post
      image="2.jpg"
      title="How To Make Orange Chicken Recipe?"
    />
    <single-blog-post image="36.jpg" title="Sweet Yummy Chocolate in the" />
    <single-blog-post
      image="37.jpg"
      title="DC Shoes: gymkhana five; the making of"
    />
    <single-blog-post
      image="38.jpg"
      title="How To Make Orange Chicken Recipe?"
    />
  </div>
</template>

<script>
import SingleBlogPost from '../posts/SingleBlogPost.vue'

export default {
  name: 'MostViewedPlaylist',
  components: {
    SingleBlogPost,
  },
}
</script>

<style></style>
