<template>
  <header class="header">
    <a class="logo" href="#">LOGO</a>
    <NavBar />
    <SelectCOmponent />
    <a href="#contact" class="btn-primary btn-wrapper">sign in for free</a>
  </header>
</template>
<script>
import NavBar from './NavBar.vue';
import SelectCOmponent from './UI/SelectComponent.vue';

export default { components: { NavBar, SelectCOmponent } };
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

.btn-wrapper {
  width: 167px;
  height: 40px;
}
</style>
