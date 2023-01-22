<template>
  <div class="select-container" v-click-out="closeDropDown">
    <button class="btn" @click.stop="dropIt" :class="{ btn__open: isDropped }">
      {{ this.buttonText }}
    </button>
    <img
      class="arrow"
      :class="{ 'arrow--open': isDropped }"
      src="@/assets/arrow_down.svg"
      alt="arrow-img"
    />
    <transition name="slide">
      <ul class="list" v-if="isDropped">
        <li
          class="list__item"
          v-for="item in items"
          :key="item"
          @click="selectOption(item)"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isDropped: false,
      isOpen: false,
      buttonText: 'EN',
      items: ['UA', 'GK', 'DE'],
    }
  },
  methods: {
    dropIt() {
      this.isDropped = !this.isDropped
    },
    selectOption(item) {
      this.buttonText = item
      this.dropIt()
    },

    closeDropDown() {
      this.isDropped = false
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.select-container {
  position: relative;
  width: 80px;
}
.btn {
  width: 80px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 60px;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  z-index: 5;
  position: relative;

  &__open {
    border-radius: 20px 20px 0 0;
    border-bottom: 1px solid #000;
  }
}

.list {
  position: absolute;
  width: 204px;
  list-style-type: none;
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  border: 1px solid #000;
  border-top: none;
  width: 80px;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  top: 36px;
  z-index: 3;

  &__item {
    padding: 10px 16px;
    background: white;
    cursor: pointer;
  }
}

.arrow {
  position: absolute;
  top: 10px;
  right: 16px;
  transition: transform 0.2s linear;

  &--open {
    transform: rotate(-180deg);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  color: #fff;
  transform: scaleY(0);
}
</style>
