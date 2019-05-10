<template>
  <div class="comments__wrapper">
    <div class="comments__item d-flex align-items-center" :class="{comments__item_mb: !mb}">
      <img :src="require(`@/assets/img/${comment.profileImg}`)" alt="profile-image" class="comments__icon">
      <div class="comments__data">
        <div class="comments__info d-flex align-items-center">
          <h5 class="comments__name">
            {{ comment.name }}
          </h5>
          <p class="comments__time">
            {{ comment.date }}
          </p>
        </div>
        <p class="comments__text">
          {{ comment.content }}
        </p>
      </div>
    </div>
    <img v-if="comment.contentImg" :src="require(`@/assets/img/${comment.contentImg}`)" alt="" class="tom-pic">
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['comment'],
  computed: {
    mb () {
      return !this.comment.contentImg
    }
  }
}
</script>

<style>

</style>
