<template>
  <div class="answer d-flex align-items-center">
    <div class="answer__pic d-flex align-items-center justify-content-center">
      <span>?</span>
    </div>
    <div class="answer__info d-flex flex-column">
      <p class="answer__quest">
        {{ question }}
      </p>
      <p class="answer__ans">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: ['question', 'answer']
}
</script>

<style>

</style>
