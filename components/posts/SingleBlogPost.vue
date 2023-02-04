<template>
  <div class="single-blog-post d-flex">
    <div class="post-thumbnail">
      <img :src="require(`~/assets/imgs/${image}`)" alt="" />
    </div>
    <div class="post-content">
      <a href="single-post.html" class="post-title">{{ title }}</a>
      <div class="post-meta d-flex justify-content-between">
        <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 14</a>
        <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 34</a>
        <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleBlogPost',
  props: {
    title: String,
    image: String,
  },
}
</script>

<style></style>
