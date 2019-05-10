<template>
  <div>
    <Samsung />
    <IPhone />
  </div>
</template>

<script>
import Samsung from './samsung'
import IPhone from './iphone'

export default {
  name: 'phone',
  components: {
    Samsung,
    IPhone
  }
}
</script>

<style>

</style>
