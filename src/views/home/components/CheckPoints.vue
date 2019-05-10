<template>
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
</template>

<script>

export default {
  name: 'check-points'
}
</script>

<style>

</style>
