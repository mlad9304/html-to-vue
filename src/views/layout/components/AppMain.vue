<template>
  <div>
    <router-view :key="key" />
  </div>
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

</style>
