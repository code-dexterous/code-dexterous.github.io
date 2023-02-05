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
            <font-awesome-icon :icon="['fas', 'circle']" aria-hidden="true" />
            <a href="#" class="post-date">{{ date }}</a>
          </div>
          <p class="mb-2">
            {{ description }}
          </p>
          <div class="post-meta d-flex">
            <a href="#"
              ><font-awesome-icon
                :icon="['fas', 'comments']"
                aria-hidden="true"
              />
              32</a
            >
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'eye']" aria-hidden="true" />
              42</a
            >
            <a href="#"
              ><font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                aria-hidden="true"
              />
              7</a
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
