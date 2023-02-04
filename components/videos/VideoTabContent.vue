<template>
  <div class="tab-content">
    <div
      id="post-1"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="post-1-tab"
    >
      <div
        class="single-feature-post video-post bg-img"
        :style="{ backgroundImage: `url(${require('~/assets/imgs/7.jpg')})` }"
      >
        <a href="video-post.html" class="btn play-btn"
          ><i class="fa fa-play" aria-hidden="true"></i
        ></a>

        <div class="post-content">
          <a href="#" class="post-cata">Sports</a>
          <a href="single-post.html" class="post-title"
            >Reunification of migrant toddlers, parents should be completed
            Thursday</a
          >
          <div class="post-meta d-flex">
            <a href="#"
              ><i class="fa fa-comments-o" aria-hidden="true"></i> 25</a
            >
            <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 25</a>
            <a href="#"
              ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 25</a
            >
          </div>
        </div>

        <span class="video-duration">05.03</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoTabContent',
}
</script>
