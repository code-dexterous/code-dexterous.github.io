<template>
  <div class="single-widget latest-video-widget mb-50">
    <div class="section-heading style-2 mb-30">
      <h4>Latest Video</h4>
      <div class="line"></div>
    </div>

    <div class="single-post-area mb-30">
      <div class="post-thumbnail">
        <img src="img/bg-img/13.jpg" alt="" />
        <span class="video-duration">05.03</span>
      </div>

      <div class="post-content">
        <a href="#" class="post-cata cata-sm cata-success">Sports</a>
        <a href="single-post.html" class="post-title"
          >Full article Prince Charles's 'urgent' global research</a
        >
        <div class="post-meta d-flex">
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'comments']"
              aria-hidden="true"
            />
            14</a
          >
          <a href="#">
            <font-awesome-icon :icon="['fas', 'eye']" aria-hidden="true" />
            38
          </a>
          <a href="#">
            <font-awesome-icon
              :icon="['fas', 'eythumbs-upe']"
              aria-hidden="true"
            />
            22
          </a>
        </div>
      </div>
    </div>
    <single-blog-post
      image="1.jpg"
      title="DC Shoes: gymkhana five; the making of"
    />
    <single-blog-post image="2.jpg" title="Sweet Yummy Chocolatea Tea" />
    <single-blog-post
      image="35.jpg"
      title="How To Make Orange Chicken Recipe?"
    />
  </div>
</template>

<script>
export default {
  name: 'LatestVideo',
}
</script>

<style></style>
