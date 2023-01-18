<template>
  <section class="container" id="welcome-section">
    <div class="info-section">
      <h1 class="info-section__title">Trade everywhere. Invest here!</h1>
      <p class="info-section__description">
        We provide only the best trading software. The trading terminal
        MetaTrader4 is the most popular and convenient platform for access to
        global exchanges. You can work anywhere.
      </p>
      <violet-button>SDASDAS</violet-button>
    </div>
    <div class="logo-container">
      <img
        class="logo-container__img"
        src="/trade-image.svg"
        alt="trade-logo"
      />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.container {
  background-color: $violet-500;
  height: 720px;
  padding: 100px 120px;
  display: flex;
  justify-content: space-between;
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 585px;

  &__title {
    font-size: 64px;
    color: $gray-500;
    line-height: 72px;
    font-weight: 500;
    margin-bottom: 32px;
  }

  &__description {
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: $gray-400;
    max-width: 420px;
  }
}

.logo-container {
  width: 480px;
  height: 520px;

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
