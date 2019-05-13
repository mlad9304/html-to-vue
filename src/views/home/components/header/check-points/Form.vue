<template>
  <form class="form d-flex flex-column" @submit="checkForm">
    <div class="form__wrap" :class="{'animated shake': isInvalid}">
      <div class="france">
        <img src="@/assets/img/flag.svg" alt="">
      </div>
      <input
        type="tel"
        class="form__input"
        :class="{invalid: isInvalid}"
        placeholder="0X XX XX XX XX"
        required
        v-mask="'## ## ## ## ##'"
        v-model="phoneNumber"
      />
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
      phoneNumber: '',
      isInvalid: false
    }
  },
  methods: {
    ...mapActions(['changePhoneNumber']),
    checkForm (e) {
      e.preventDefault()
      if (/0[6,7]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}/g.test(this.phoneNumber)) {
        this.$router.push('/processed')
        this.isInvalid = false
      } else {
        this.isInvalid = true
        setTimeout(() => {
          this.isInvalid = false
        }, 800)
      }
    }
  }
}
</script>

<style scoped>
  .form__input.invalid {
    box-shadow: 0 0 10px 4px rgba(211, 0, 0, 0.5);
  }
</style>
