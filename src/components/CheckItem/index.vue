<template>
  <div class="steps__item d-flex align-items-center">
    <div class="steps__icon d-flex align-items-center justify-content-center">
      <span>&#10003;</span>
    </div>
    <p class="steps__info">
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'check-item',
  props: ['label']
}
</script>

<style>

</style>
