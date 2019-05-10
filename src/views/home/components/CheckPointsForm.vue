<template>
  <form action="#" class="form d-flex flex-column" id="form">
    <div class="form__wrap">
      <div class="france">
        <img src="@/assets/img/flag.svg" alt="">
      </div>
      <input type="tel" class="form__input" placeholder="0X XX XX XX XX" required>
    </div>
    <button class="btn form__btn">Check my loyality points</button>
  </form>
</template>

<script>
export default {
  name: 'check-points-form'
}
</script>

<style>

</style>
