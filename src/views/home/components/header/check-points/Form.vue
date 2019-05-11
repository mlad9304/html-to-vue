<template>
  <form class="form d-flex flex-column" @submit="checkForm">
    <div class="form__wrap">
      <div class="france">
        <img src="@/assets/img/flag.svg" alt="">
      </div>
      <input type="tel" class="form__input" placeholder="0X XX XX XX XX" required v-model="phoneNumber">
    </div>
    <button class="btn form__btn">Check my loyality points</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'check-points-form',
  data () {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    ...mapActions(['changePhoneNumber']),
    checkForm (e) {
      e.preventDefault()
      if (/0[6,7]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}/g.test(this.phoneNumber)) {
        console.log(true)
        this.$router.push('/processed')
      }
    }
  }
}
</script>

<style>

</style>
