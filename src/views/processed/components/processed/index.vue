<template>
  <div class="load d-flex">
    <Item :status="item1Status" label="Checking operator <br>name" />
    <Item :status="item2Status" label="Checking loyality <br>points" />
    <Item :status="item3Status" label="Verification product <br>aviable" :isLast="true" />
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'processed',
  components: {
    Item
  },
  data () {
    return {
      item1Status: 'disabled',
      item2Status: 'disabled',
      item3Status: 'disabled'
    }
  },
  created () {
    this.item1Status = 'loading'
    setTimeout(() => {
      this.item1Status = 'checked'
      this.item2Status = 'loading'
    }, 3000)
    setTimeout(() => {
      this.item2Status = 'checked'
      this.item3Status = 'loading'
    }, 6000)
    setTimeout(() => {
      this.item3Status = 'checked'
    }, 9000)
  }
}
</script>

<style>

</style>
