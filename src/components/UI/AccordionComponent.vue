<template>
  <ul class="accordion">
    <li
      v-for="item in items"
      @click="open(item.id)"
      class="accordion__item"
      :key="item.id"
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="accordion__trigger">
        <h4 class="accordion__title">{{ item.title }}</h4>
        <img
          src="@/assets/plus-icon.svg"
          alt="pen-close-icon"
          class="accordion__btn"
          :class="{
            'accordion__btn--active': visible === item.id,
          }"
        />
      </div>
      <div
        class="accordion__content"
        :class="{
          'accordion__content--active': visible === item.id,
        }"
      >
        <p class="accordion__text">{{ item.text }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: { items: { type: Array, required: true } },
  data() {
    return {
      visible: null,
    };
  },
  methods: {
    open(id) {
      if (this.visible === id) {
        this.visible = null;
      } else {
        this.visible = id;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  &__item {
    padding: 32px 32px;
    border: 2px solid $violet-500;
    border-radius: 20px;
    margin-bottom: 16px;
    cursor: pointer;

    @include onMobile {
      padding: 24px;
    }
  }
  &__content {
    transition: max-height 0.2s ease-out;
    max-height: 0;
    overflow: hidden;
    max-width: 750px;
  }

  &__content--active {
    transition: max-height 0.7s ease-out;
    max-height: 1000px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: $gray-500;
    max-width: 750px;

    @include onMobile {
      font-size: 18px;
      line-height: 22px;
    }
  }

  &__text {
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;
    color: $gray-400;
    padding-top: 24px;
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    position: relative;
    width: 18px;
    height: 18px;
    top: 3px;
    transition: transform 0.2s linear;
    &--active {
      transform: rotate(-45deg);
    }
  }
}
</style>
