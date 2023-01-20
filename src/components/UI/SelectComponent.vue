<template>
  <div class="component-container">
    <div class="drop-down" :class="{ 'drop-down--open': isOpen }">
      <h3 @click="toggleOpen" class="drop-down__chosen-option">EN</h3>
      <ul
        class="drop-down__options-list"
        :class="{ 'drop-down__options-list--open': isOpen }"
      >
        <li class="drop-down__option">
          <p class="drop-down__option-text">RU</p>
        </li>
        <li class="drop-down__option">
          <p class="drop-down__option-text">UA</p>
        </li>
        <li class="drop-down__option">
          <p class="drop-down__option-text">GN</p>
        </li>
      </ul>
      <div class="border-top"></div>
      <div class="border-bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scope lang="scss">
.component-container {
  position: relative;
  width: 80px;
  height: 40px;
}

.drop-down {
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;

  transition: height 0.5s ease-in;
  overflow: hidden;

  &--open {
    height: 150px;
  }

  &__chosen-option {
    margin-left: 16px;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    margin-top: 12px;
    color: $gray-500;
  }

  &__options-list {
    transform: translateY(20px);
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    margin-left: 10px;
  }

  &__option {
    margin-bottom: 16px;
  }
  &__option-text {
  }

  .border-top {
    position: absolute;
    border-top: 1px solid #000;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    width: 100%;
    pointer-events: none;
  }

  .border-bottom {
    position: absolute;
    border-bottom: 1px solid #000;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    width: 100%;
    pointer-events: none;
  }
}
</style>
