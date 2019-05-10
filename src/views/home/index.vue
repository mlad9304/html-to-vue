<template>
  <div>
    <Header />
    <Sponsor />
    <Well />
  </div>
</template>

<script>
import Header from './components/Header'
import Sponsor from './components/Sponser'
import Well from './components/Well'

export default {
  name: 'home',
  components: {
    Header,
    Sponsor,
    Well
  }
}
</script>

<style>

</style>
