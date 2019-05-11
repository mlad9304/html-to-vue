<template>
  <transition name="fade" mode="out-in">
    <router-view :key="key" />
  </transition>
</template>

<script>
export default {
  name: 'app-main',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
