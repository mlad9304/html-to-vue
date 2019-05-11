<template>
  <div class="load__item"
    :class="{
      load__item_dis: isLast,
      load__item_aft: (!isLast && status === 'checked'),
      'load__item_aft load__item_circ': (!isLast && (status === 'loading' || status === 'disabled'))
    }"
  >
    <ItemCircle :status="status" />
    <p class="load__info" v-html="label"></p>
  </div>
</template>

<script>
import ItemCircle from './ItemCircle'

export default {
  name: 'processed-item',
  components: {
    ItemCircle
  },
  props: ['status', 'label', 'isLast']
}
</script>

<style>

</style>
