<template>
  <div v-if="video">
    <div class="vizew-breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#"
                    ><i class="fa fa-home" aria-hidden="true"></i> Home</a
                  >
                </li>
                <li class="breadcrumb-item"><a href="#">Archives</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ video.title }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="vizew-pager-area">
      <div class="vizew-pager-prev">
        <p>PREVIOUS ARTICLE</p>

        <div
          class="single-feature-post video-post bg-img pager-article"
          style="background-image: url(img/bg-img/15.jpg)"
        >
          <div class="post-content">
            <a href="#" class="post-cata cata-sm cata-success">Sports</a>
            <a href="single-post.html" class="post-title"
              >Searching for the 'angel' who held me on Westminster Bridge</a
            >
            <div class="post-meta d-flex">
              <a href="#"
                ><i class="fa fa-comments-o" aria-hidden="true"></i> 18</a
              >
              <a href="#"><i class="fa fa-eye" aria-hidden="true"></i> 32</a>
              <a href="#"
                ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 24</a
              >
            </div>
          </div>

          <span class="video-duration">11.13</span>
        </div>
      </div>
      <div class="vizew-pager-next">
        <p>NEXT ARTICLE</p>

        <div
          class="single-feature-post video-post bg-img pager-article"
          style="background-image: url(img/bg-img/14.jpg)"
        >
          <div class="post-content">
            <a href="#" class="post-cata cata-sm cata-business">Business</a>
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

          <span class="video-duration">06.59</span>
        </div>
      </div>
    </div>

    <section class="post-details-area mb-80">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="single-video-area">
              <iframe
                :src="`https://www.youtube.com/embed/${video.videoUrl}`"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="post-details-content d-flex">
              <video-share />
              <div class="blog-content">
                <div class="post-content mt-0">
                  <a href="#" class="post-cata cata-sm cata-danger">
                    {{ video.badge }}
                  </a>
                  <a href="single-post.html" class="post-title mb-2">
                    {{ video.title }}
                  </a>
                  <div class="d-flex justify-content-between mb-30">
                    <div class="post-meta d-flex align-items-center">
                      <a href="#" class="post-author">
                        {{ video.author }}
                      </a>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      <a href="#" class="post-date">
                        {{ video.date }}
                      </a>
                    </div>
                    <div class="post-meta d-flex">
                      <a href="#"
                        ><i class="fa fa-comments-o" aria-hidden="true"></i>
                        32</a
                      >
                      <a href="#"
                        ><i class="fa fa-eye" aria-hidden="true"></i> 42</a
                      >
                      <a href="#"
                        ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        7</a
                      >
                    </div>
                  </div>
                </div>
                <p>
                  I love dals. All kinds of them but yellow moong dal is my
                  go-to lentil when I am in need of some easy comfort food. In
                  this recipe I added suva or dill leaves to the classic moong
                  dal recipe for a twist. I like the simplicity of this recipe,
                  just the dal, tomatoes and fresh dill with simple seasoning.
                  This recipe is without any onions and garlic. I love the aroma
                  of fresh dill and I think, in Indian food, we don’t really use
                  dill as much as we can. Nine out of ten times, the only green
                  leaves sprinkled on a curry or a dal is fresh coriander and
                  while I love coriander too, dill adds a unique freshness and
                  aroma to the dal. The delicate feathery leaves of dill are
                  also rich in Vitamin A, C and minerals like iron and
                  manganese.
                </p>
                <p>
                  Dals or lentils are packed with proteins and especially in a
                  vegetarian diet, lentils are the main source of protein. It is
                  amazing how this humble yellow moong dal can be made into so
                  many recipes from a plain dal khichdi to mangodi ki sabzi to
                  the traditional Indian desserts like moong dal halwa.
                </p>
                <blockquote class="vizew-blockquote mb-15">
                  <h5 class="blockquote-text">
                    “If you’re going to try, go all the way. There is no other
                    feeling like that. You will be alone with the gods.”
                  </h5>
                  <h6>Ollie Schneider - CEO Deercreative</h6>
                </blockquote>
                <p>
                  Dals or lentils are packed with proteins and especially in a
                  vegetarian diet, lentils are the main source of protein. It is
                  amazing how this humble yellow moong dal can be made into so
                  many recipes from a plain dal khichdi to mangodi ki sabzi to
                  the traditional Indian desserts like moong dal halwa. Fresh
                  dill should be added only at the end of cooking, much like
                  fresh coriander leaves.
                </p>
                <h4>Immediate Dividends</h4>
                <ul class="unordered-list mb-0">
                  <li>
                    Wash the dal in 3-4 changes of water and soak in room
                    temperature water for 10 mins while you finish the rest of
                    preparation.
                  </li>
                  <li>
                    Drain and pressure cook with salt, turmeric and water for 2
                    whistles.
                  </li>
                  <li>
                    Remove the cooker from heat and open only after all the
                    steam has escaped on its own.
                  </li>
                  <li>
                    While the dal is cooking, heat ghee in a pan. Add hing and
                    cumin seeds.
                  </li>
                  <li>
                    When the seeds start to crackle, add ginger, and green
                    chillies. Sauté for a minute.
                  </li>
                  <li>
                    Add tomatoes and a little salt. Mix well. Cook for about 5
                    mins with occasional stirring.
                  </li>
                </ul>

                <div class="post-tags mt-30">
                  <ul>
                    <li><a href="#">HealthFood</a></li>
                    <li><a href="#">Sport</a></li>
                    <li><a href="#">Game</a></li>
                  </ul>
                </div>

                <div class="vizew-post-author d-flex align-items-center py-5">
                  <div class="post-author-thumb">
                    <img src="img/bg-img/30.jpg" alt="" />
                  </div>
                  <div class="post-author-desc pl-4">
                    <a href="#" class="author-name">Calantha Flower</a>
                    <p>
                      Hello! My name is Nicolas Sarkozy. I’m a web designer and
                      front-end web developer with over fifteen years of
                      professional.
                    </p>
                    <div class="post-author-social-info">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                      <a href="#"><i class="fa fa-linkedin"></i></a>
                      <a href="#"><i class="fa fa-dribbble"></i></a>
                    </div>
                  </div>
                </div>

                <div class="related-post-area mt-5">
                  <div class="section-heading style-2">
                    <h4>Related Post</h4>
                    <div class="line"></div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <div class="single-post-area mb-50">
                        <div class="post-thumbnail">
                          <img src="img/bg-img/11.jpg" alt="" />

                          <span class="video-duration">05.03</span>
                        </div>

                        <div class="post-content">
                          <a href="#" class="post-cata cata-sm cata-success"
                            >Sports</a
                          >
                          <a href="single-post.html" class="post-title"
                            >Warner Bros. Developing ‘The accountant’ Sequel</a
                          >
                          <div class="post-meta d-flex">
                            <a href="#"
                              ><i
                                class="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>
                              22</a
                            >
                            <a href="#"
                              ><i class="fa fa-eye" aria-hidden="true"></i>
                              16</a
                            >
                            <a href="#"
                              ><i
                                class="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              15</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="single-post-area mb-50">
                        <div class="post-thumbnail">
                          <img src="img/bg-img/12.jpg" alt="" />

                          <span class="video-duration">05.03</span>
                        </div>

                        <div class="post-content">
                          <a href="#" class="post-cata cata-sm cata-danger"
                            >Game</a
                          >
                          <a href="single-post.html" class="post-title"
                            >Searching for the 'angel' who held me on
                            Westminste</a
                          >
                          <div class="post-meta d-flex">
                            <a href="#"
                              ><i
                                class="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>
                              28</a
                            >
                            <a href="#"
                              ><i class="fa fa-eye" aria-hidden="true"></i>
                              17</a
                            >
                            <a href="#"
                              ><i
                                class="fa fa-thumbs-o-up"
                                aria-hidden="true"
                              ></i>
                              22</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <comment-list /> -->
                <!-- <post-comment /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import CommentList from '~/components/comments/CommentList.vue'
// import PostComment from '~/components/comments/PostComment.vue'
import VideoShare from '~/components/videos/VideoShare.vue'
import { mernPlaylist } from '~/utils'

export default {
  name: 'VideoPost',
  components: {
    VideoShare,
    // PostComment,
    // CommentList
  },
  asyncData({ params, redirect }) {
    const video = mernPlaylist[params.postId]
    return { video: video || null }
  },
}
</script>

<style></style>
