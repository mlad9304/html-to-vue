<template>
  <div class="girl d-none d-lg-block">
    <div class="samsung d-flex flex-column align-items-center justify-content-around">
      <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
      <p class="samsung__text">
        Samsung S10 Winner
      </p>
      <p class="samsung__name" :class="{'animated fadeIn': isChanged}">
        {{ winner.name | stringFormatter }}
      </p>
      <div class="samsung__line" :class="{'animated fadeIn': isChanged}"></div>
      <div class="samsung__addr px-2 d-flex" :class="{'animated fadeIn': isChanged}">
        <i class="fa fa-map-marker-alt"></i>
        <p class="city">from {{ winner.city | stringFormatter }}, 1 min ago</p>
      </div>
    </div>
    <img src="@/assets/img/girl.png" alt="" class="girl__pic">
  </div>
</template>

<script>
export default {
  name: 'samsung',
  props: ['winner'],
  data () {
    return {
      isChanged: false
    }
  },
  watch: {
    winner (newValue) {
      this.isChanged = true
      setTimeout(() => {
        this.isChanged = false
      }, 800)
    }
  }
}
</script>

<style scoped>
  .city {
    text-align: justify;
    text-justify: inter-word;
  }
</style>
