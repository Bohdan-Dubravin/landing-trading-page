<template>
  <div class="wrapper">
    <Header />
    <main>
      <WelcomeSection />
    </main>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import WelcomeSection from './components/WelcomeSection.vue';

export default { components: { Header, WelcomeSection } };
</script>
<style lang="scss">
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
