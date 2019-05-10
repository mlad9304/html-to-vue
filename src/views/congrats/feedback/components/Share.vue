<template>
  <div>
    <div class="share">
      <p class="share__title">
        Share
      </p>
      <div class="share__icons d-flex justify-content-between">
        <a href="https://www.facebook.com/" class="share__item share__item_fb" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/?lang=en" class="share__item share__item_tw" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.google.com/" class="share__item share__item_goo" target="_blank">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a href="https://www.instagram.com/?hl=en" class="share__item share__item_inst" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.pinterest.com/" class="share__item share__item_pint" target="_blank">
          <i class="fab fa-pinterest-p"></i>
        </a>
      </div>
    </div>
    <div class="widget d-flex justify-content-center">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share'
}
</script>

<style>

</style>
