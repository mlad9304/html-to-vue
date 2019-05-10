<template>
  <header class="header" id="header">
    <img src="@/assets/img/elements.png" alt="" class="elem">
    <div class="girl d-none d-lg-block">
      <div class="samsung d-flex flex-column align-items-center justify-content-around">
        <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
        <p class="samsung__text">
          Samsung S10 Winner
        </p>
        <p class="samsung__name">
          Serge Gaingsbourg
        </p>
        <div class="samsung__line"></div>
        <div class="samsung__addr">
          <i class="fa fa-map-marker-alt"></i>
          from Rennes, 1 min ago
        </div>
      </div>
      <img src="@/assets/img/girl.png" alt="" class="girl__pic">
    </div>
    <div class="container">
      <Logo />
      <CheckPoints />
      <div class="row d-lg-none">
        <div class="col-12">
          <div class="girl girl_md ml-auto mr-auto">
            <div class="samsung d-flex flex-column align-items-center justify-content-around">
              <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
              <p class="samsung__text">
                Samsung S10 Winner
              </p>
              <p class="samsung__name">
                Serge Gaingsbourg
              </p>
              <div class="samsung__line"></div>
              <div class="samsung__addr">
                <i class="fa fa-map-marker-alt"></i>
                from Rennes, 1 min ago
              </div>
            </div>
            <img src="@/assets/img/girl.png" alt="" class="girl__pic">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import CheckPoints from './CheckPoints'

export default {
  name: 'Header',
  components: {
    Logo,
    CheckPoints
  }
}
</script>

<style>

</style>
