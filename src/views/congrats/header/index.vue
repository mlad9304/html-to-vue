<template>
  <header class="header header_congs">
    <img src="@/assets/img/gift-girl.png" alt="" class="gift-girl d-none d-sm-block">
    <img src="@/assets/img/confetti.png" alt="" class="conf">
    <img src="@/assets/img/elements.png" alt="" class="elem">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <Logo :class="{logo_congs: true, 'd-flex': true}" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-xl-7">
          <div class="offer offer_congs">
            <Title />
            <Description />
            <img src="@/assets/img/sm-gift.png" alt="" class="ggirl d-sm-none">
            <div class="btn-wrap d-flex align-items-center">
              <img src="@/assets/img/left.png" alt="" class="lft">
              <a href="#" class="btn fill-btn">
                Fill my information
              </a>
              <img src="@/assets/img/right.png" alt="" class="right">
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Title from './components/Title'
import Description from './components/Description'

export default {
  name: 'Header',
  components: {
    Logo,
    Title,
    Description
  }
}
</script>

<style>

</style>
