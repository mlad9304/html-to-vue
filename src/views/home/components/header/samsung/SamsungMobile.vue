<template>
  <div class="row d-lg-none">
    <div class="col-12">
      <div class="girl girl_md ml-auto mr-auto">
        <div class="samsung d-flex flex-column align-items-center justify-content-around">
          <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
          <p class="samsung__text">
            Samsung S10 Winner
          </p>
          <p class="samsung__name">
            {{ name }}
          </p>
          <div class="samsung__line"></div>
          <div class="samsung__addr px-2">
            <i class="fa fa-map-marker-alt"></i>
            from {{ city }}, 1 min ago
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
  props: ['name', 'city']
}
</script>

<style>

</style>
