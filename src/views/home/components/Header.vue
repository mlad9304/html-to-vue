<template>
  <header class="header" id="header">
  <img src="@/assets/img/elements.png" alt="" class="elem">
  <Samsung />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Logo :class="{'d-flex': true}" />
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
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import CheckPointsTitle from './CheckPointsTitle'
import CheckPointsForm from './CheckPointsForm'
import Samsung from './Samsung'
import SamsungMobile from './SamsungMobile'

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
