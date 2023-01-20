<template>
  <section class="steps-section" id="steps">
    <div class="wrapper">
      <h2 class="steps__title">Getting Started Is Fast & Easy</h2>
      <div class="steps__steps-list">
        <div
          class="step"
          v-for="(step, i) in steps"
          :class="{
            'step--top': i % 2 !== 0,
            'step--leftLine': i % 2 === 0,
            'step--rightLine': i % 2 !== 0 && i < steps.length - 1,
          }"
        >
          <h3 class="step__number">{{ step.num }}</h3>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__text">
            {{ step.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          num: '01.',
          title: 'Register',
          text: 'Complete the simple registration to get your trading credentials.',
        },
        {
          num: '02.',
          title: 'Verification',
          text: 'Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.',
        },
        {
          num: '03.',
          title: 'Deposit funds',
          text: 'Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.',
        },
        {
          num: '04.',
          title: 'Start Trading',
          text: 'Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.steps-section {
  padding: 140px 120px;

  @include onTablet {
    padding: 0 40px;
  }

  @include onMobile {
    padding: 0 20px;
  }
}

.steps {
  &__title {
    position: relative;
    font-weight: 700;
    font-size: 56px;
    line-height: 66px;
    max-width: 480px;
    margin-bottom: 68px;
    &::after {
      position: absolute;
      width: 290px;
      content: '';
      top: 50%;
      left: 0;
      right: 0;
      bottom: -10px;
      background-color: $violet-500;
      opacity: 0.1;
      z-index: -1;
    }
  }

  &__steps-list {
    display: grid;
    grid-template-columns: minmax(250px, 483px) minmax(250px, 483px);
    gap: 105px 134px;
    position: relative;
    max-width: 1100px;

    @include onTablet {
      gap: 105px 30px;
    }

    @include onMobile {
      display: block;
    }
  }
}

.step {
  position: relative;
  align-self: start;
  border: 2px solid $violet-500;
  border-radius: 30px;
  padding: 32px;
  background-color: #fff;

  @include onMobile {
    padding: 24px;
    margin-bottom: 24px;
  }

  &--top {
    top: 150px;
    @include onMobile {
      top: 0;
    }
  }

  &--leftLine {
    &::after {
      content: '';
      position: absolute;
      height: 50%;
      width: 90%;
      border-top: 3px dashed $violet-500;
      border-right: 3px dashed $violet-500;
      border-top-right-radius: 40px;
      right: -85%;
      top: 40%;
      z-index: -1;
    }

    @include onMobile {
      &::after {
        display: none;
      }
    }
  }

  &--rightLine {
    &::before {
      content: '';
      position: absolute;
      height: 50%;
      width: 90%;
      border-top: 3px dashed $violet-500;
      border-left: 3px dashed $violet-500;
      border-top-left-radius: 40px;
      left: -85%;
      top: 40%;
      z-index: -1;
    }

    @include onMobile {
      &::before {
        display: none;
      }
    }
  }

  &__number {
    font-weight: 700;
    line-height: 18px;
    color: $violet-500;
    margin-bottom: 8px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 24px;
  }

  &__text {
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: $gray-400;
  }
}
</style>
