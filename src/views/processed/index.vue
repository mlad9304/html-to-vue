<template>
  <section class="header_proc">
    <vue-headful title="Processed" />
    <div class="container">
      <div class="row">
        <div class="col-5">
          <Logo class="logo_cong logo_proc d-flex" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <div class="offer">
            <Title />
            <SimMobile />
            <Processed />
          </div>
        </div>
        <Sim />
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '@/components/Logo'
import Title from './components/Title'
import Processed from './components/processed'
import Sim from './components/sim/Sim'
import SimMobile from './components/sim/SimMobile'

export default {
  name: 'processed',
  components: {
    Logo,
    Title,
    Processed,
    Sim,
    SimMobile
  }
}
</script>

<style>

</style>
