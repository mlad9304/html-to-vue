<template>
  <section class="header" id="header">
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
      <div class="row">
        <div class="col-12 col-lg-7 col-xl-6">
          <div class="offer">
            <h1 class="offer__title">
              Check loyality points <br> <span>of your mobile phone</span>
            </h1>
            <form action="#" class="form d-flex flex-column" id="form">
              <div class="form__wrap">
                <div class="france">
                  <img src="@/assets/img/flag.svg" alt="">
                </div>
                <input type="tel" class="form__input" placeholder="0X XX XX XX XX" required>
              </div>
              <button class="btn form__btn">Check my loyality points</button>
            </form>
          </div>
        </div>
      </div>
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
  </section>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'check-points',
  components: {
    Logo
  }
}
</script>

<style>

</style>
