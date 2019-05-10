<template>
  <section class="iphone" id="iphone">
    <img src="@/assets/img/phone2.png" alt="iPhone" class="iphone-pic d-none d-lg-block">
    <div class="iphone-md d-lg-none">
      <img src="@/assets/img/iphonexs.png" alt="">
    </div>
    <img src="@/assets/img/elements3.png" alt="" class="elem2 iphone-elem">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <Title />
          <Info />
          <button class="btn get-btn out">
            Out of stock
          </button>
          <div class="left d-flex align-items-center">
            <img src="@/assets/img/star.png" alt="Star" class="left__pic">
            <p class="left__info">
              Left 3 pc on this loyalty points
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from './components/Title'
import Info from './components/Info'

export default {
  name: 'iphone',
  components: {
    Title,
    Info
  }
}
</script>

<style>

</style>
