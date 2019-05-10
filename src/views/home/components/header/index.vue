<template>
  <div class="header">
    <img src="@/assets/img/elements.png" alt="" class="elem">
    <Samsung />
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
      <SamsungMobile />
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
