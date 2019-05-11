<template>
  <div class="header">
    <img src="@/assets/img/elements.png" alt="" class="elem">
    <Samsung :winner="winner" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Logo class="d-flex" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-7 col-xl-6">
          <div class="offer">
            <CheckPointsTitle />
            <CheckPointsForm />
          </div>
        </div>
      </div>
      <SamsungMobile :winner="winner" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '@/components/Logo'
import CheckPointsTitle from './check-points/Title'
import CheckPointsForm from './check-points/Form'
import Samsung from './samsung/Samsung'
import SamsungMobile from './samsung/SamsungMobile'

export default {
  name: 'Header',
  components: {
    Logo,
    CheckPointsTitle,
    CheckPointsForm,
    Samsung,
    SamsungMobile
  },
  computed: {
    ...mapGetters(['winner'])
  },
  methods: {
    ...mapActions(['startGetWinner', 'endGetWinner'])
  },
  created () {
    this.startGetWinner()
  },
  beforeDestroy () {
    this.endGetWinner()
  }
}
</script>

<style>

</style>
