<template>
  <div class="load d-flex">
    <div class="load__item load__item_aft">
      <div class="load__icon bgrd">
        &#10003;
      </div>
      <p class="load__info">
        Checking operator <br>
        name
      </p>
    </div>
    <div class="load__item load__item_aft load__item_circ">
      <div class="load__icon load__icon_circ">
        <img src="@/assets/img/circ.svg" alt="">
      </div>
      <p class="load__info load__info_circ">
        Checking loyality <br>
        points
      </p>
    </div>
    <div class="load__item load__item_dis">
      <div class="load__icon load__icon_dis"></div>
      <p class="load__info load__info_dis">
        Verification product <br>
        aviable
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'processed'
}
</script>

<style>

</style>
