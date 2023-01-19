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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="scss">
.component-container {
  position: relative;
  width: 80px;
  height: 40px;
  transition: all 0.5s ease-in;
}
.drop-down {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 40px;
  border: 1px solid #000;
  border-radius: 60px;
  transition: all 0.5s ease-in;

  &--open {
  }

  &__chosen-option {
    margin-left: 16px;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: $gray-500;
    margin-top: 12px;
  }

  &__options-list {
    transition: all 0.5s ease-in;
    padding-top: 20px;
    margin-left: 16px;
    background-color: white;
    max-height: 0;
    overflow-y: hidden;
  }

  &__options-list--open {
    max-height: 1000px;
    transition: all 0.5s ease-in;
    background-color: $gray-100;
  }

  &__option {
    margin-bottom: 16px;
  }

  &__option-text {
  }
}
</style>
