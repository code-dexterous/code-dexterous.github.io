<template>
  <div class="single-post-area mb-30">
    <div class="row align-items-center">
      <div class="col-12 col-lg-6">
        <div class="post-thumbnail">
          <img :src="require(`~/assets/imgs/${image}`)" alt="" />
          <span class="video-duration">{{ timeline }}</span>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="post-content mt-0">
          <a href="#" class="post-cata cata-sm cata-success">{{ badge }}</a>
          <a href="single-post.html" class="post-title mb-2">{{ title }}</a>
          <div class="post-meta d-flex align-items-center mb-2">
            <a href="#" class="post-author">By {{ author }}</a>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <a href="#" class="post-date">{{ date }}</a>
          </div>
          <p class="mb-2">
            {{ description }}
          </p>
          <div class="post-meta d-flex">
            <a href="#"
              ><i class="fa fa-comments-o" aria-hidden="true"></i> 32</a
            >
            <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 42</a>
            <a href="#"
              ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 7</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePostArea',
  props: {
    description: String,
    date: String,
    author: String,
    title: String,
    badge: String,
    timeline: String,
    image: String,
  },
}
</script>

<style></style>
