<template>
  <section class="delivery">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="shipping d-flex align-items-center justify-content-around">
            <div class="shipping__item d-flex align-items-center flex-column">
              <div class="shipping__icon icon-aft d-flex align-items-center justify-content-center">
                <img src="@/assets/img/card.png" alt="">
              </div>
              <p class="shipping__info shipping__info_short">
                Pay now €5
                for shipping
              </p>
            </div>
            <div class="shipping__item shipping__item_mrg d-flex align-items-center flex-column">
              <div class="shipping__icon icon-aft icon-aft_sec d-flex align-items-center justify-content-center">
                <img src="@/assets/img/car.png" alt="">
              </div>
              <p class="shipping__info">
                Express shipping
                takes 3-5 days
              </p>
            </div>
            <div class="shipping__item d-flex align-items-center flex-column">
              <div class="shipping__icon d-flex align-items-center justify-content-center">
                <img src="@/assets/img/get-phone.png" alt="">
              </div>
              <p class="shipping__info">
                Get your phone
                for only €5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'delivery'
}
</script>

<style>

</style>
