<template>
  <ul class="accordion">
    <li v-for="item in items" class="accordion__item" :key="item.id">
      <div class="accordion__trigger" @click="open(item.id)">
        <h4>{{ item.title }}</h4>
        <button>X</button>
      </div>
      <div
        class="accordion__content"
        :class="{
          'accordion__content--active': visible === item.id,
        }"
      >
        <p>{{ item.text }}</p>
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
    }
  },
  methods: {
    open(id) {
      if (this.visible === id) {
        this.visible = null
      } else {
        this.visible = id
      }
    },
    // start(el) {
    //   el.style.height = el.scrollHeight + 'px'
    // },
    // end(el) {
    //   el.style.height = ''
    // },
  },
}
</script>

<style lang="scss" scoped>
.accordion {
  &__item {
    padding: 32px 40px;
    border: 2px solid $violet-500;
    border-radius: 20px;
    margin-bottom: 16px;
  }
  &__content {
    transition: all 0.2s linear;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
  }

  &__content--active {
    transition: all 0.5s linear;
    max-height: 200px;
    opacity: 1;
    visibility: visible;
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
}

/* .content-enter-active,
.content-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.content-enter,
.content-leave-to {
  transition: all 0.3s ease;
  height: 0 !important;
  opacity: 0;
} */
</style>
