<template>
  <ul class="nav vizew-nav-tab" role="tablist">
    <video-tab-nav-item
      image="3.jpg"
      title="Boys 'doing well' after Thai cave rescue"
      comments="25"
      views="11"
      likes="19"
    />
    <video-tab-nav-item
      image="4.jpg"
      title="Meet the 12 boys rescued from cave"
      comments="14"
      views="34"
      likes="84"
    />
    <video-tab-nav-item
      image="5.jpg"
      title="Pogba dedicates France win to Thai cave boys"
      comments="14"
      views="34"
      likes="84"
    />
    <video-tab-nav-item
      image="6.jpg"
      title="How the world reacted to PM's Brexit crisis"
      comments="24"
      views="98"
      likes="63"
    />
    <video-tab-nav-item
      image="4.jpg"
      title="Meet the 12 boys rescued from cave"
      comments="24"
      views="98"
      likes="63"
    />
    <video-tab-nav-item
      image="6.jpg"
      title="How the world reacted to PM's Brexit crisis"
      comments="24"
      views="98"
      likes="63"
    />
    <video-tab-nav-item
      image="4.jpg"
      title="Meet the 12 boys rescued from cave"
      comments="24"
      views="98"
      likes="63"
    />
  </ul>
</template>

<script>
import VideoTabNavItem from './VideoTabNavItem.vue'
export default {
  name: 'VideoTabNav',
  components: { VideoTabNavItem },
}
</script>
