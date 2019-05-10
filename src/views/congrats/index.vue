<template>
  <div>
    <Header />
    <Delivery />
    <Feedback />
  </div>
</template>

<script>
import Header from './header'
import Delivery from './delivery'
import Feedback from './feedback'

export default {
  name: 'congrats',
  components: {
    Header,
    Delivery,
    Feedback
  }
}
</script>

<style>

</style>
