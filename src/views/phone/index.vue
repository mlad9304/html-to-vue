<template>
  <div>
    <vue-headful title="Phone" />
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
  .star__pic {
    transition: all .2s ease-in-out;
  }
  .star__pic:hover {
    transform: scale(1.3);
  }
</style>
