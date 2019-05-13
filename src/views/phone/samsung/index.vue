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
          <Logo class="logo_phone d-flex" />
        </div>
      </div>
      <div class="row row_brd">
        <div class="col-lg-6 col-12">
          <Title />
          <Info />
          <div class="samsung-md d-sm-none">
            <img src="@/assets/img/galaxy.png" alt="">
          </div>
          <div class="btn-wrap d-flex align-items-center mt-5">
            <img src="@/assets/img/left.png" alt="" class="lft" :class="{left_animation: isActiveArrows}">
            <router-link to="/congrats" tag="button" class="btn get-btn mx-3">
              Get it now
            </router-link>
            <img src="@/assets/img/right.png" alt="" class="right" :class="{right_animation: isActiveArrows}">
          </div>
          <div class="left d-flex align-items-center">
            <img src="@/assets/img/star.png" alt="Star" class="left__pic star__pic">
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
  },
  data () {
    return {
      isActiveArrows: false,
      sInterval: null
    }
  },
  methods: {
    clickHandler (e) {
      window.open('https://google.com', '_blank')
    },
    moveArrows () {
      this.isActiveArrows = true
      setTimeout(() => {
        this.isActiveArrows = false
      }, 200)
    }
  },
  created () {
    this.sInterval = setInterval(() => {
      this.moveArrows()
    }, 1500)
  },
  beforeDestroy () {
    clearInterval(this.sInterval)
  }
}
</script>

<style scoped>
  .lft, .right {
    transition: all .2s ease-in-out;
  }
  .left_animation {
    transform: translateX(10px);
  }
  .right_animation {
    transform: translateX(-10px);
  }
</style>
