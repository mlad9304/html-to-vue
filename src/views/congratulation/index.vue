<template>
  <header class="header_cong" id="header_cong">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <Logo class="logo_cong d-flex" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="cong">
            <div class="cont">
              <h1 class="cont__title">
                Congratulation!
              </h1>
              <p class="cont__info">
                Your mobile number have 30,000 points
              </p>
              <button class="btn cont__btn">
                Show products aviable my points
              </button>
              <a href="#" class="refuse">
                No thanks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'congratulation',
  components: {
    Logo
  }
}
</script>

<style>

</style>
