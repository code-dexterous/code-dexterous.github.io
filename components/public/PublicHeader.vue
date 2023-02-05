<template>
  <header class="header-area">
    <div class="top-header-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <!-- <div class="breaking-news-area d-flex align-items-center">
              <div class="news-title">
                <p>Breaking News:</p>
              </div>
              <div id="breakingNewsTicker" class="ticker">
                <ul>
                  <li>
                    <a href="single-post.html">10 Things Amazon Echo Can Do</a>
                  </li>
                  <li>
                    <a href="single-post.html">Welcome to Colorlib Family.</a>
                  </li>
                  <li>
                    <a href="single-post.html">Boys 'doing well' after Thai</a>
                  </li>
                </ul>
              </div>
            </div> -->
          </div>
          <div class="col-12 col-md-6">
            <div
              class="top-meta-data d-flex align-items-center justify-content-end"
            >
              <social-media />
              <div class="top-search-area">
                <form action="index.html" method="post">
                  <input
                    id="topSearch"
                    type="search"
                    name="top-search"
                    placeholder="Search..."
                  />
                  <button type="submit" class="btn">
                    <font-awesome-icon
                      :icon="['fas', 'search']"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              </div>

              <!-- <a href="login.html" class="login-btn">
                <font-awesome-icon :icon="['fas', 'user']" aria-hidden="true" />
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="sticker" class="vizew-main-menu">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <nav id="vizewNav" class="classy-navbar justify-content-between">
            <nuxt-link to="/" class="nav-brand">
              <img class="logo" src="/logo.svg" alt="" />
            </nuxt-link>

            <div class="classy-navbar-toggler">
              <span class="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div class="classy-menu">
              <div class="classycloseIcon">
                <div class="cross-wrap">
                  <span class="top"></span><span class="bottom"></span>
                </div>
              </div>

              <div class="classynav">
                <ul>
                  <li class="active">
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SocialMedia from './SocialMedia.vue'
export default {
  name: 'PublicHeader',
  components: { SocialMedia },
}
</script>
