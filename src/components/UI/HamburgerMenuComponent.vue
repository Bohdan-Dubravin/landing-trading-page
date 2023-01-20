<template>
  <div class="hamburger-wrapper" @click="toggleMenu">
    <div class="hamburger" :class="{ 'hamburger--closed': !isOpen }">
      <div
        class="hamburger__icon"
        :class="{ 'hamburger__icon--open': isOpen }"
      ></div>
    </div>
    <div class="menu-overlay" v-if="isOpen"></div>
    <div class="menu" :class="{ menu__open: isOpen }">
      <div class="hamburger__select-lang">
        <SelectComponent />
      </div>
      <NavBar />
      <div class="menu__link">
        <a href="#contact" class="btn-primary">sign in for free</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SelectComponent from '@/components/UI/SelectComponent.vue'
export default {
  components: { NavBar, SelectComponent },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss">
.hamburger-wrapper {
  padding: 18px 3px 11px;
  width: 24px;
  height: 31px;
  margin: 0 7px;
  cursor: pointer;
}
.hamburger {
  position: fixed;
  top: 37px;
  right: 40px;
  z-index: 5;

  @include onMobile {
    right: 20px;
  }

  &--closed {
    position: absolute;
  }

  &__icon {
    width: 18px;
    height: 2px;
    background: #333;
    margin: 3px 0;

    &::before {
      top: -2px;
    }
    &:after {
      bottom: -2px;
    }

    &--open {
      height: 0;
      position: relative;
    }
  }

  &__select-lang {
    margin-bottom: 20px;
  }
}

.hamburger__icon:before,
.hamburger__icon:after {
  content: '';
  width: 18px;
  height: 2px;
  background: #333;
  border-radius: 10px;
  position: absolute;
  transition: transform 0.5s ease;
  left: 0;
}
.hamburger__icon--open:before {
  transform: rotate(45deg);
  transition: transform 0.5s ease;
  top: 0;
}
.hamburger__icon--open:after {
  transform: rotate(-45deg);
  transition: transform 0.5s ease;
  top: 0;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 4;
  transform: translateY(-100%);
  transition: transform 0.5s ease;
  padding: 120px;

  @include onMobile {
    padding: 120px 20px;
  }

  &__open {
    transform: translateY(0);
  }

  &__link {
    width: 167px;
    height: 40px;
  }
}
</style>
