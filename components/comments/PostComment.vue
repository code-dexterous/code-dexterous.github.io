<template>
  <div class="post-a-comment-area">
    <div class="section-heading style-2">
      <h4>Leave a reply</h4>
      <div class="line"></div>
    </div>

    <div class="contact-form-area">
      <form action="#" method="post">
        <div class="row">
          <div class="col-12 col-lg-6">
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Your Name*"
            />
          </div>
          <div class="col-12 col-lg-6">
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Your Email*"
            />
          </div>
          <div class="col-12">
            <textarea
              id="message"
              name="message"
              class="form-control"
              placeholder="Message*"
            ></textarea>
          </div>
          <div class="col-12">
            <button class="btn vizew-btn mt-30" type="submit">
              Submit Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostComment',
}
</script>

<style></style>
