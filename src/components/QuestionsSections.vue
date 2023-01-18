<template>
  <section class="questions-section" id="questions">
    <h2>Frequently asked questions</h2>
    <AccordionComponent :items="questions" />
  </section>
</template>
<script>
import AccordionComponent from '@/components/ui/AccordionComponent.vue'

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
      ],
    }
  },
}
</script>
<style lang="scss">
.questions-section {
  padding: 0 120px;
  padding-bottom: 140px;
}
</style>
