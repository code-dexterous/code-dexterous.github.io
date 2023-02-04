<template>
  <div class="col-12 col-md-4">
    <div class="single-post-area mb-80">
      <div class="post-thumbnail">
        <img :src="require(`~/assets/imgs/${image}`)" alt="" />
        <span class="video-duration">{{ timeline }}</span>
      </div>

      <div class="post-content">
        <a href="#" class="post-cata cata-sm cata-success">{{ badge }}</a>
        <a href="single-post.html" class="post-title">{{ title }}</a>
        <div class="post-meta d-flex">
          <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 22</a>
          <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 16</a>
          <a href="#"
            ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 15</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrendingPostArea',
  props: {
    image: String,
    timeline: String,
    badge: String,
    title: String,
  },
}
</script>

<style></style>
