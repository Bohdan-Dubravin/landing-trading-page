<template>
  <header class="header">
    <a class="header__logo" href="#">LOGO</a>
    <NavBar class="header__nav-bar" />
    <div class="header__select-lang"><SelectComponent /></div>
    <a href="#contact" class="btn-primary header__btn-wrapper"
      >sign in for free</a
    >
    <HamburgerMenuComponent class="header__hamburger" />
  </header>
</template>
<script>
import NavBar from './NavBar.vue'
import HamburgerMenuComponent from './UI/HamburgerMenuComponent.vue'
import SelectComponent from './UI/SelectComponent.vue'

export default {
  components: { NavBar, SelectComponent, HamburgerMenuComponent },
}
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  padding: 0 60px;

  @include onLaptop {
    padding: 0 20px;
  }

  &__hamburger {
    display: none;
    @include onTablet {
      display: block;
    }
  }

  &__nav-bar {
    @include onTablet {
      display: none;
    }
  }

  &__select-lang {
    display: block;
    margin: 0 24px 0 auto;
    @include onTablet {
      display: none;
    }

    @include onLaptop {
      margin: 0 5px 0 5px;
    }
  }

  &__logo {
    color: $gray-500;
    text-decoration: none;
    padding: 30px 60px;
    font-weight: 900;
    @include onLaptop {
      padding: 30px 0px;
    }
  }

  &__btn-wrapper {
    width: 167px;
    height: 40px;

    @include onMobile {
      display: none;
    }

    @include onTablet {
      margin: 0 48px 0 auto;
    }
  }
}
</style>
