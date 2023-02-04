<template>
  <li class="nav-item">
    <a
      id="post-1-tab"
      class="nav-link active"
      data-toggle="pill"
      href="#post-1"
      role="tab"
      aria-controls="post-1"
      aria-selected="true"
    >
      <div class="single-blog-post style-2 d-flex align-items-center">
        <div class="post-thumbnail">
          <img :src="require(`~/assets/imgs/${image}`)" alt="" />
        </div>
        <div class="post-content">
          <h6 class="post-title">{{ title }}</h6>
          <div class="post-meta d-flex justify-content-between">
            <span
              ><i class="fa fa-comments-o" aria-hidden="true"></i>
              {{ comments }}</span
            >
            <span
              ><i class="fa fa-eye" aria-hidden="true"></i> {{ views }}</span
            >
            <span
              ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              {{ likes }}</span
            >
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VideoTabNavItem',
  props: {
    image: String,
    title: String,
    comments: Number,
    views: Number,
    likes: Number,
  },
}
</script>

<style></style>
