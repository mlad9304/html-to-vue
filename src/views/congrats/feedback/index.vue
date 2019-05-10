<template>
  <section class="feedback">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <Comments />
          <CommentForm />
        </div>
        <div class="col-12 col-lg-4">
          <Share />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Comments from './components/Comments'
import CommentForm from './components/CommentForm'
import Share from './components/Share'

export default {
  name: 'feedback',
  components: {
    Comments,
    CommentForm,
    Share
  }
}
</script>

<style>

</style>
