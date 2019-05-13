<template>
  <div class="row d-lg-none">
    <div class="col-12">
      <div class="girl girl_md ml-auto mr-auto">
        <div class="samsung d-flex flex-column align-items-center justify-content-around">
          <img
            :src="require(`@/assets/img/${winner.phone}.svg`)"
            alt="Samsung"
            :class="{[phoneImg]: true, 'animated fadeIn': isChanged}"
          >
          <p class="samsung__text" :class="{'animated fadeIn': isChanged}">
            {{ phoneStr }} Winner
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'samsung-mobile',
  props: ['winner'],
  data () {
    return {
      isChanged: false
    }
  },
  computed: {
    phoneStr () {
      return this.winner.phone === 'samsung' ? 'Samsung S10' : 'Apple'
    },
    phoneImg () {
      return this.winner.phone === 'samsung' ? 'samsung__pic' : 'apple__pic'
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
