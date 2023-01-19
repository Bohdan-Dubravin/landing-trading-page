<template>
  <div class="wrapper">
    <HeaderApp />
    <main>
      <WelcomeSection />
      <StartStepsSection />
      <ReviewsSection />
      <QuestionsSections />
      <ContactSection />
    </main>
  </div>
  <FooterApp />
</template>
<script>
import ContactSection from './components/ContactSection.vue'
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import QuestionsSections from './components/QuestionsSections.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import StartStepsSection from './components/StartStepsSection.vue'
import WelcomeSection from './components/WelcomeSection.vue'

export default {
  components: {
    HeaderApp,
    WelcomeSection,
    StartStepsSection,
    ReviewsSection,
    QuestionsSections,
    ContactSection,
    FooterApp,
  },
}
</script>
<style lang="scss">
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
