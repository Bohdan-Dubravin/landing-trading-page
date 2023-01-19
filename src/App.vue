<template>
  <div class="wrapper">
    <Header />
    <main>
      <WelcomeSection />
      <StartStepsSection />
      <ReviewsSection />
      <QuestionsSections />
      <ContactSection />
    </main>
  </div>
</template>
<script>
import ContactSection from './components/ContactSection.vue';
import Header from './components/Header.vue';
import QuestionsSections from './components/QuestionsSections.vue';
import ReviewsSection from './components/ReviewsSection.vue';
import StartStepsSection from './components/StartStepsSection.vue';
import WelcomeSection from './components/WelcomeSection.vue';

export default {
  components: {
    Header,
    WelcomeSection,
    StartStepsSection,
    ReviewsSection,
    QuestionsSections,
    ContactSection,
  },
};
</script>
<style lang="scss">
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
