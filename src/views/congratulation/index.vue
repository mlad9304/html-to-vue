<template>
  <section class="header_cong">
    <vue-headful title="Congratulation" />
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
              <router-link to="/phone" class="btn cont__btn" tag="button">
                Show products aviable my points
              </router-link>
              <a href="#" class="refuse">
                No thanks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'congratulation',
  components: {
    Logo
  },
  created () {
    setTimeout(() => {
      this.$router.push('/phone')
    }, 5000)
  }
}
</script>

<style>

</style>
