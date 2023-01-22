<template>
  <section class="container" id="welcome-section">
    <div class="info-section">
      <h1
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000"
        class="info-section__title section-title"
      >
        Trade everywhere. Invest here!
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="300"
        class="info-section__description"
      >
        We provide only the best trading software. The trading terminal
        MetaTrader4 is the most popular and convenient platform for access to
        global exchanges. You can work anywhere.
      </p>
      <a
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="800"
        href="#contact"
        class="btn-primary info-section__btn"
        >Start Trading</a
      >
    </div>
    <div class="logo-container">
      <img
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1500"
        class="logo-container__img"
        src="/trade-image.svg"
        alt="trade-logo"
      />
    </div>
    <div class="bg-color-container"></div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  padding: 100px 120px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @include onTablet {
    flex-direction: column;
    padding: 40px;
    align-items: center;
    justify-content: baseline;
  }
  @include onMobile {
    flex-direction: column;
    padding: 32px 20px 40px;
    justify-content: baseline;
  }
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 585px;

  &__title {
    margin-bottom: 32px;

    @include onTablet {
      text-align: center;
    }

    @include onMobile {
      text-align: left;
      max-width: 260px;
    }
  }

  &__description {
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: $gray-400;
    max-width: 420px;
    margin-bottom: 48px;

    @include onTablet {
      text-align: center;
      max-width: 460px;
      margin: 0 auto 48px;
    }

    @include onMobile {
      text-align: left;
      margin-bottom: 32px;
    }
  }

  &__btn {
    width: 257px;
    height: 54px;

    @include onTablet {
      margin: 0 auto;
    }

    @include onMobile {
      width: 100%;
    }
  }
}

.logo-container {
  width: 480px;
  transform: translateY(-30px);

  @include onTablet {
    width: 100%;
    transform: translateY(0);
    margin-top: 32px;
    max-width: 420px;
  }

  @include onMobile {
    width: 100%;
    transform: translateY(0);
    margin-top: 32px;
    max-width: 300px;
  }
  &__img {
    width: 100%;
    height: 100%;
  }
}

.bg-color-container {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: $violet-500;
  opacity: 0.1;
  z-index: -1;
  width: 100%;
  height: 100%;
  @include onMobile {
    background: #4f62f6;
  }
}
</style>
