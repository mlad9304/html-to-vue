<template>
  <section class="well" id="well">
    <img src="@/assets/img/ask-girl.png" alt="" class="ask-girl">
    <img src="@/assets/img/elements2.png" alt="" class="elem2">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 ml-lg-auto">
          <h2 class="title title_well">
            Well, what about...
          </h2>
        </div>
      </div>
      <div class="row row_col">
        <div class="col-lg-7 col-xl-6 ml-auto">
          <Question question="Do I need a credit card to use this?" answer="Nope!" class="answer_first" />
        </div>
        <div class="col-lg-7 col-xl-6 ml-auto">
          <Question question="How do I get my prize?" answer="It’s simple!" />
        </div>
        <div class="col-lg-7 col-xl-6 ml-auto">
          <Question question="Do I need a credit card to use this?" answer="Nope!" class="answer_last" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Question from '@/components/Question'

export default {
  name: 'questions',
  components: {
    Question
  }
}
</script>

<style>

</style>
