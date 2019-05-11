<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="status"></component>
  </transition>
</template>

<script>
import Checked from './components/Checked'
import Loading from './components/Loading'
import Disabled from './components/Disabled'

export default {
  name: 'item-circle',
  props: ['status'],
  components: {
    'checked': Checked,
    'loading': Loading,
    'disabled': Disabled
  }
}
</script>

<style scoped>
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .2s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
