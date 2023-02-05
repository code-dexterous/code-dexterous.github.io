<template>
  <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-xl-3">
          <div class="footer-widget mb-70">
            <a href="index.html" class="foo-logo d-block mb-4">
              <img src="img/core-img/logo2.png" alt="" />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>

            <div class="footer-nl-area">
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
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="footer-widget mb-70">
            <h6 class="widget-title">Latest Twister</h6>

            <div class="twitter-slides owl-carousel">
              <div class="single--twitter-slide">
                <div class="single-twit">
                  <p>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                    <span>@Leonard</span> I am so happy because I found this
                    magazine, and it just made Vizeweasier. Thanks for sharing
                  </p>
                </div>

                <div class="single-twit">
                  <p>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                    <span>@Leonard</span> I am so happy because I found this
                    magazine, and it just made Vizeweasier. Thanks for sharing
                  </p>
                </div>
              </div>

              <div class="single--twitter-slide">
                <div class="single-twit">
                  <p>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                    <span>@Colorlib</span> I am so happy because I found this
                    magazine, and it just made Vizeweasier. Thanks for sharing
                  </p>
                </div>

                <div class="single-twit">
                  <p>
                    <font-awesome-icon :icon="['fab', 'twitter']" />
                    <span>@Colorlib</span> I am so happy because I found this
                    magazine, and it just made Vizeweasier. Thanks for sharing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="footer-widget mb-70">
            <h6 class="widget-title">Sport Videos</h6>

            <div class="single-blog-post d-flex">
              <div class="post-thumbnail">
                <img src="img/bg-img/1.jpg" alt="" />
              </div>
              <div class="post-content">
                <a href="single-post.html" class="post-title"
                  >DC Shoes: gymkhana the</a
                >
                <div class="post-meta d-flex justify-content-between">
                  <a href="#">
                    <font-awesome-icon
                      :icon="['fab', 'comments']"
                      aria-hidden="true"
                    />
                    14</a
                  >
                  <a href="#"
                    ><font-awesome-icon
                      :icon="['fab', 'eye']"
                      aria-hidden="true"
                    />
                    34</a
                  >
                  <a href="#"
                    ><font-awesome-icon
                      :icon="['fab', 'thumbs-up']"
                      aria-hidden="true"
                    />
                    84</a
                  >
                </div>
              </div>
            </div>

            <div class="single-blog-post d-flex">
              <div class="post-thumbnail">
                <img src="img/bg-img/2.jpg" alt="" />
              </div>
              <div class="post-content">
                <a href="single-post.html" class="post-title"
                  >Sweet Yummy Chocolatea Tea</a
                >
                <div class="post-meta d-flex justify-content-between">
                  <a href="#"
                    ><font-awesome-icon
                      :icon="['fas', 'comments']"
                      aria-hidden="true"
                    />
                    14</a
                  >
                  <a href="#"
                    ><font-awesome-icon
                      :icon="['fas', 'eye']"
                      aria-hidden="true"
                    />
                    34</a
                  >
                  <a href="#"
                    ><font-awesome-icon
                      :icon="['fas', 'thumbs-up']"
                      aria-hidden="true"
                    />
                    84</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="footer-widget mb-70">
            <h6 class="widget-title">Our Address</h6>

            <div class="contact-address">
              <p>101 E 129th St, East Chicago, <br />IN 46312, US</p>
              <p>Phone: 001-1234-88888</p>
              <p>Email:</p>
            </div>

            <div class="footer-social-area">
              <a href="#" class="facebook">
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
              </a>
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
              Copyright &copy; All rights reserved | This template is made with
              <font-awesome-icon :icon="['fas', 'heart']" /> by
              <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
          <div class="col-12 col-sm-6">
            <nav class="footer-nav">
              <ul>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Privacy</a></li>
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
