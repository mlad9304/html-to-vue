<template>
  <section class="header_proc" id="header_proc">
    <div class="container">
      <Logo />
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
import Processed from './components/Processed'
import Sim from './components/Sim'
import SimMobile from './components/SimMobile'

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
