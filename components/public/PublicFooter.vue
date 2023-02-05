<template>
  <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-xl-4 col-md-4 col-lg-4">
          <div class="footer-widget mb-70">
            <a href="index.html" class="foo-logo d-block mb-4">
              <img class="logo" src="/logo.svg" alt="" />
            </a>
            <!-- <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p> -->

            <!-- <div class="footer-nl-area">
              <form action="#" method="post">
                <input
                  id="nlEmail"
                  type="email"
                  name="nl-email"
                  class="form-control"
                  placeholder="Your email"
                />
                <button type="submit">
                  <font-awesome-icon
                    :icon="['fas', 'paper-plane']"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </div> -->
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 col-md-4 col-lg-4">
          <div class="footer-widget mb-70">
            <div class="footer-social-area">
              <a
                href="https://github.com/code-dexterous"
                target="_blank"
                class="github"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                href="https://www.youtube.com/c/CodeDexterous"
                target="_blank"
                class="youtube"
              >
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </a>
              <a
                href="https://codedexterous.medium.com/"
                target="_blank"
                class="medium"
              >
                <font-awesome-icon :icon="['fab', 'medium']" />
              </a>
              <!-- <a href="#" class="facebook">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="#" class="google-plus">
                <font-awesome-icon :icon="['fab', 'google-plus']" />
              </a>
              <a href="#" class="instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="#" class="twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#" class="linkedin">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 col-md-4 col-lg-4">
          <div class="footer-widget mb-70">
            <h6 class="widget-title">Our Address</h6>
            <div class="contact-address">
              <p>Delhi, India</p>
              <p>Email: codedexterous@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copywrite-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-sm-6">
            <p class="copywrite-text">
              Copyright &copy; All rights reserved |
              <font-awesome-icon :icon="['fas', 'heart']" />
              <nuxt-link to="/">CodeDexterous</nuxt-link>
            </p>
          </div>
          <div class="col-12 col-sm-6">
            <nav class="footer-nav">
              <ul>
                <li>
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PublicFooter',
}
</script>
