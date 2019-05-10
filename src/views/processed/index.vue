<template>
  <section class="header_proc" id="header_proc">
    <div class="container">
      <Logo />
      <div class="row">
        <div class="col-md-9">
          <div class="offer">
            <h1 class="offer__title offer__title_proc">
              Processed <br>
              <span>
                It only takes a few moments
              </span>
            </h1>
            <div class="col-md-3 col-sm-6 ml-sm-auto mr-sm-auto d-md-none">
              <div class="sim">
                <img src="@/assets/img/sim-card.png" alt="">
                <img src="@/assets/img/scan.png" alt="" class="scan">
              </div>
            </div>
            <div class="load d-flex">
              <div class="load__item load__item_aft">
                <div class="load__icon bgrd">
                  &#10003;
                </div>
                <p class="load__info">
                  Checking operator <br>
                  name
                </p>
              </div>
              <div class="load__item load__item_aft load__item_circ">
                <div class="load__icon load__icon_circ">
                  <img src="@/assets/img/circ.svg" alt="">
                </div>
                <p class="load__info load__info_circ">
                  Checking loyality <br>
                  points
                </p>
              </div>
              <div class="load__item load__item_dis">
                <div class="load__icon load__icon_dis"></div>
                <p class="load__info load__info_dis">
                  Verification product <br>
                  aviable
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 ml-sm-auto mr-sm-auto d-none d-md-block">
          <div class="sim">
            <img src="@/assets/img/sim-card.png" alt="">
            <img src="@/assets/img/scan.png" alt="" class="scan">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'processed',
  components: {
    Logo
  }
}
</script>

<style>

</style>
