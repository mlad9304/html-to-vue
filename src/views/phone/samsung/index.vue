<template>
  <div class="header header_phone">
    <img src="@/assets/img/elements.png" alt="" class="elem elem_phone">
    <img src="@/assets/img/phone1.png" alt="" class="samsung-phone d-none d-lg-block">
    <div class="samsung-md d-none d-sm-block d-lg-none">
      <img src="@/assets/img/galaxy.png" alt="">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Logo :class="{logo_phone: true, 'd-flex': true}" />
        </div>
      </div>
      <div class="row row_brd">
        <div class="col-lg-6 col-12">
          <Title />
          <Info />
          <div class="samsung-md d-sm-none">
            <img src="@/assets/img/galaxy.png" alt="">
          </div>
          <button class="btn get-btn">
            Get it now
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
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Title from './components/Title'
import Info from './components/Info'

export default {
  name: 'samsung',
  components: {
    Logo,
    Title,
    Info
  }
}
</script>

<style>

</style>
