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
        'Samsung Galaxy S10',
        '512 GB',
        'Lilac Purple'
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
