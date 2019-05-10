<template>
  <div>
    <CheckPoints />
    <Sponsor />
    <Well />
  </div>
</template>

<script>
import CheckPoints from './components/CheckPoints'
import Sponsor from './components/Sponser'
import Well from './components/Well'

export default {
  name: 'home',
  components: {
    CheckPoints,
    Sponsor,
    Well
  }
}
</script>

<style>

</style>
