<template>
  <div>
    <vue-headful title="Home" />
    <Header :name="currentName" :city="currentCity" />
    <Sponsor />
    <Questions />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from './components/header'
import Sponsor from './components/Sponser'
import Questions from './components/Questions'

export default {
  name: 'home',
  components: {
    Header,
    Sponsor,
    Questions
  },
  computed: {
    ...mapGetters(['currentName', 'currentCity'])
  },
  methods: {
    ...mapActions(['startGetNameAndCity'])
  },
  created () {
    this.startGetNameAndCity()
  }
}
</script>

<style>

</style>
