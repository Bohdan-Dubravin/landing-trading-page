<template>
  <footer class="container">
    <div class="footer">
      <h2 class="footer__logo">LOGO</h2>
      <div class="footer__info">
        <h3 class="footer__info-title">Information and high risk warning:</h3>
        <p class="footer__info-text">
          Trading with foreign exchange (FX), contract for differences (CFDs)
          and precious metals carries a high level of risk that may not be
          suitable for all investors. Leverage creates additional risk and loss
          exposure. Before you decide to trade foreign exchange or contract for
          differences, carefully consider your investment objectives, experience
          level, and risk tolerance.
        </p>
      </div>
      <div class="footer__info">
        <h3 class="footer__info-title">Legal disclaimer:</h3>
        <p class="footer__info-text">
          Forex trading entails significant risks and is not appropriate for all
          investors. The possibility of incurring substantial losses should be
          taken into account. It is therefore important to understand the
          possible consequences of investing. Traders should weigh their earning
          potential against the risks involved and act accordingly. Interactive
          Trade Ltd operating under brand and using domenLink domain within the
          European Economic Area.
        </p>
      </div>
      <nav class="footer__nav">
        <ul class="footer__nav-list">
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#questions">About Us</a>
          </li>
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#instructions">Instructions</a>
          </li>
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#contact">Platforms</a>
          </li>
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#contact">Contact Us</a>
          </li>
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#contact">Sign In</a>
          </li>
          <li class="footer__nav-item">
            <a class="footer__nav-link" href="#contact">Sign Up for Free</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="policies">
      <ul class="policies__list">
        <li class="policies__item">
          <p class="policies__text">Copyright 2020, All Right Reserved</p>
        </li>
        <li class="policies__item">
          <p class="policies__text">Terms and Conditions</p>
        </li>
        <li class="policies__item">
          <p class="policies__text">Privacy Policy</p>
        </li>
        <li class="policies__item">
          <p class="policies__text">Risk Warnings</p>
        </li>
        <li class="policies__item">
          <p class="policies__text">Anti-Money Laundering</p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  padding: 32px 120px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @include onMobile {
    padding: 46px 20px 20px 32px;
  }
}

.footer {
  display: flex;
  width: 100%;
  margin-bottom: 48px;

  @include onMobile {
    flex-direction: column;
  }

  @include onTablet {
    flex-direction: column;
  }

  &__logo {
    font-weight: 900;
    font-size: 15px;
    line-height: 16px;
    margin-right: auto;

    @include onMobile {
      margin: 0 auto 46px;
    }

    @include onTablet {
      margin: 0 auto 56px;
    }
  }

  &__info {
    max-width: 380px;
    font-weight: 70;
    font-size: 18px;
    line-height: 30px;

    @include onTablet {
      order: 2;
      max-width: 100%;
    }
    @include onMobile {
      order: 2;
      max-width: 100%;
    }

    &:first-child {
      margin-right: 30px;

      @include onTablet {
        margin-bottom: 32px;
      }
      @include onMobile {
        margin-bottom: 24px;
      }
    }
  }

  &__info-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 16px;
    color: $gray-500;
  }

  &__info-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;
    color: $gray-400;
  }

  &__nav {
    margin-left: 96px;

    @include onTablet {
      margin: 0;
      margin-bottom: 40px;
    }
    @include onMobile {
      margin: 0;
      margin-bottom: 32px;
    }
  }

  &__nav-list {
    display: flex;
    flex-direction: column;

    @include onTablet {
      flex-direction: row;
      justify-content: space-between;
    }
    @include onMobile {
      flex-direction: column;
    }
  }

  &__nav-item {
    margin-bottom: 24px;
  }

  &__nav-link {
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: $gray-500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

.policies {
  &__list {
    display: flex;
    justify-content: space-between;

    @include onMobile {
      flex-direction: column;
      align-items: center;
    }

    @include onTablet {
      flex-direction: column;
      align-items: center;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: $gray-300;

    @include onMobile {
      margin-bottom: 16px;
    }

    @include onTablet {
      margin-bottom: 16px;
    }
  }
}
</style>
