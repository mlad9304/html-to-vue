<template>
  <div>
    <Header />
    <Sponsor />
    <Questions />
  </div>
</template>

<script>
import Header from './components/header'
import Sponsor from './components/Sponser'
import Questions from './components/Questions'

export default {
  name: 'home',
  components: {
    Header,
    Sponsor,
    Questions
  }
}
</script>

<style>

</style>
