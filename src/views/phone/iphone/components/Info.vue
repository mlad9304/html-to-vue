<template>
  <div class="steps d-flex flex-column">
    <CheckItem v-for="(info, index) in infos" :key="index" :label="info" />
  </div>
</template>

<script>
import CheckItem from '@/components/CheckItem'

export default {
  name: 'info',
  data () {
    return {
      infos: [
        'Apple iPhone XS',
        '256 GB',
        'Space Grey'
      ]
    }
  },
  components: {
    CheckItem
  }
}
</script>

<style>

</style>
