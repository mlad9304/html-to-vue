<template>
  <footer class="footer d-flex align-items-center" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Logo class="logo_footer d-flex" />
        </div>
        <div class="col-lg-5 col-9 ml-auto">
          <div class="footer-info d-flex flex-column">
            <p class="rights">
              2019 France. All Rights Reserved.
            </p>
            <a href="#" class="privacy">
              Privacy & Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<style>

</style>
