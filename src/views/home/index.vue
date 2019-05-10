<template>
  <div>
    <header class="header" id="header">
      <img src="@/assets/img/elements.png" alt="" class="elem">
      <div class="girl d-none d-lg-block">
        <div class="samsung d-flex flex-column align-items-center justify-content-around">
          <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
          <p class="samsung__text">
            Samsung S10 Winner
          </p>
          <p class="samsung__name">
            Serge Gaingsbourg
          </p>
          <div class="samsung__line"></div>
          <div class="samsung__addr">
            <i class="fa fa-map-marker-alt"></i>
            from Rennes, 1 min ago
          </div>
        </div>
        <img src="@/assets/img/girl.png" alt="" class="girl__pic">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <a href="#" class="logo d-flex">
              <div class="logo__blue"></div>
              <div class="logo__pink"></div>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-7 col-xl-6">
            <div class="offer">
              <h1 class="offer__title">
                Check loyality points <br> <span>of your mobile phone</span>
              </h1>
              <form action="#" class="form d-flex flex-column" id="form">
                <div class="form__wrap">
                  <div class="france">
                    <img src="@/assets/img/flag.svg" alt="">
                  </div>
                  <input type="tel" class="form__input" placeholder="0X XX XX XX XX" required>
                </div>
                <button class="btn form__btn">Check my loyality points</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row d-lg-none">
          <div class="col-12">
            <div class="girl girl_md ml-auto mr-auto">
              <div class="samsung d-flex flex-column align-items-center justify-content-around">
                <img src="@/assets/img/samsung.svg" alt="Samsung" class="samsung__pic">
                <p class="samsung__text">
                  Samsung S10 Winner
                </p>
                <p class="samsung__name">
                  Serge Gaingsbourg
                </p>
                <div class="samsung__line"></div>
                <div class="samsung__addr">
                  <i class="fa fa-map-marker-alt"></i>
                  from Rennes, 1 min ago
                </div>
              </div>
              <img src="@/assets/img/girl.png" alt="" class="girl__pic">
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="sponsors" id="sponsors">
      <div class="container">
        <div class="row row_bb">
          <div class="col-6 col-md-3">
            <img src="@/assets/img/free_logo.png" alt="" class="logos">
          </div>
          <div class="col-6 col-md-3">
            <img src="@/assets/img/orange_logo.png" alt="" class="logos">
          </div>
          <div class="col-6 col-md-3">
            <img src="@/assets/img/logo_sfr.png" alt="" class="logos">
          </div>
          <div class="col-6 col-md-3">
            <img src="@/assets/img/bouygues.png" alt="" class="logos">
          </div>
        </div>
      </div>
    </section>
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
            <div class="answer answer_first d-flex align-items-center">
              <div class="answer__pic d-flex
              align-items-center
              justify-content-center">
              <span>?</span>
            </div>
            <div class="answer__info d-flex flex-column">
              <p class="answer__quest">
                Do I need a credit card to use this?
              </p>
              <p class="answer__ans">
                Nope!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-xl-6 ml-auto">
          <div class="answer d-flex align-items-center">
            <div class="answer__pic d-flex
            align-items-center
            justify-content-center">
            <span>?</span>
          </div>
          <div class="answer__info d-flex flex-column">
            <p class="answer__quest">
              How do I get my prize?
            </p>
            <p class="answer__ans">
              It’s simple!
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-xl-6 ml-auto">
        <div class="answer answer_last d-flex align-items-center">
          <div class="answer__pic d-flex
          align-items-center
          justify-content-center">
          <span>?</span>
        </div>
        <div class="answer__info d-flex flex-column">
          <p class="answer__quest">
            Do I need a credit card to use this?
          </p>
          <p class="answer__ans">
            Nope!
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
  <footer class="footer d-flex align-items-center" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <a href="#" class="logo d-flex logo_footer">
            <div class="logo__blue"></div>
            <div class="logo__pink"></div>
          </a>
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
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>

</style>
