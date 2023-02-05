<template>
  <div class="single-blog-post d-flex">
    <div class="post-thumbnail">
      <img :src="require(`~/assets/imgs/${image}`)" alt="" />
    </div>
    <div class="post-content">
      <a href="single-post.html" class="post-title">{{ title }}</a>
      <div class="post-meta d-flex justify-content-between">
        <a href="#">
          <font-awesome-icon :icon="['fas', 'comments']" aria-hidden="true" />
          14
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fas', 'eye']" aria-hidden="true" /> 34
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fas', 'thumbs-up']" aria-hidden="true" />
          84
        </a>
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
