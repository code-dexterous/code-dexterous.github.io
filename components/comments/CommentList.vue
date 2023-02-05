<template>
  <div class="comment_area clearfix mb-50">
    <div class="section-heading style-2">
      <h4>Comment</h4>
      <div class="line"></div>
    </div>
    <ul>
      <li class="single_comment_area">
        <div class="comment-content d-flex">
          <div class="comment-author">
            <img src="img/bg-img/31.jpg" alt="author" />
          </div>

          <div class="comment-meta">
            <a href="#" class="comment-date">27 Aug 2019</a>
            <h6>Tomas Mandy</h6>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius
            </p>
            <div class="d-flex align-items-center">
              <a href="#" class="like">like</a>
              <a href="#" class="reply">Reply</a>
            </div>
          </div>
        </div>
        <ol class="children">
          <li class="single_comment_area">
            <div class="comment-content d-flex">
              <div class="comment-author">
                <img src="img/bg-img/32.jpg" alt="author" />
              </div>

              <div class="comment-meta">
                <a href="#" class="comment-date">27 Aug 2019</a>
                <h6>Britney Millner</h6>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                </p>
                <div class="d-flex align-items-center">
                  <a href="#" class="like">like</a>
                  <a href="#" class="reply">Reply</a>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </li>

      <li class="single_comment_area">
        <div class="comment-content d-flex">
          <div class="comment-author">
            <img src="img/bg-img/33.jpg" alt="author" />
          </div>

          <div class="comment-meta">
            <a href="#" class="comment-date">27 Aug 2019</a>
            <h6>Simon Downey</h6>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius
            </p>
            <div class="d-flex align-items-center">
              <a href="#" class="like">like</a>
              <a href="#" class="reply">Reply</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
}
</script>

<style></style>
