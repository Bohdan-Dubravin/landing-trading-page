<template>
  <header class="header">
    <a class="logo" href="#">LOGO</a>
    <NavBar />
    <div class="nav__buttons-container">
      <div class="nav__lang-select"></div>
    </div>
    <div class="nav__hamburger" id="nav__hamburger">
      <span class="nav__bar"></span>
      <span class="nav__bar"></span>
      <span class="nav__bar"></span>
    </div>

    <VioletButton>
      <a href="#contact" class="">sign in for free</a></VioletButton
    >
  </header>
</template>
<script>
import NavBar from './NavBar.vue';
import VioletButton from './UI/VioletButton.vue';

export default { components: { NavBar, VioletButton } };
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  padding: 0 60px;
}

.logo {
  color: $gray-500;
  text-decoration: none;
  padding: 30px 60px;
  font-weight: 900;
}
</style>
