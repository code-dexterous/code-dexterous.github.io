<template>
  <div class="single-widget followers-widget mb-50">
    <a href="#" class="facebook">
      <font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true" />
      <span class="counter">198</span>
      <span>Fan</span>
    </a>
    <a href="#" class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true" />
      <span class="counter">220</span>
      <span>Followers</span>
    </a>
    <a href="#" class="google">
      <font-awesome-icon :icon="['fab', 'google']" aria-hidden="true" />
      <span class="counter">140</span>
      <span>Subscribe</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'FollowerWidget',
}
</script>

<style></style>
