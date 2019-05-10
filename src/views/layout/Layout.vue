<template>
  <div>
    <AppMain />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import AppMain from './components/AppMain'

export default {
  name: 'layout',
  components: {
    Footer,
    AppMain
  }
}
</script>

<style>

</style>
