<template>
  <section class="questions" id="questions">
    <h2
    data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
      class="section-title questions__title"
    >
      Frequently asked questions
    </h2>
    <AccordionComponent :items="questions" />
  </section>
</template>
<script>
import AccordionComponent from '@/components/UI/AccordionComponent.vue';

export default {
  components: { AccordionComponent },

  data() {
    return {
      questions: [
        {
          id: 1,
          title: 'How do I change my details?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 2,
          title: 'What platforms will I be able to use?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 3,
          title: 'Platforms will I be able to use?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 4,
          title: 'Why our platform?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 5,
          title: 'Benefits of platform?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 6,
          title: 'Platforms will I be able to use?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
        {
          id: 7,
          title: 'Platforms will I be able to use?',
          text: `We provide only the best trading software. The trading terminal
                MetaTrader4 is the most popular and convenient platform for
                access to global exchanges. You can work anywhere. All you need
                is the Internet because the necessary trading tools are already
                collected in one place and are available in a couple of clicks.
                Use only the best and develop with us!`,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.questions {
  padding: 140px 120px;

  @include onTablet {
    padding: 120px 40px;
  }
  @include onMobile {
    padding: 80px 20px;
  }

  &__title {
    max-width: 480px;
    position: relative;
    margin-bottom: 68px;

    @include onTablet {
      margin-bottom: 56px;
    }

    @include onMobile {
      margin-bottom: 40px;
    }

    &::after {
      content: '';
      left: 0;
      position: absolute;
      background: #6248ff;
      opacity: 0.1;
      width: 256px;
      height: 80px;

      @include onMobile {
        width: 183px;
        height: 50px;
      }
    }
  }
}
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
