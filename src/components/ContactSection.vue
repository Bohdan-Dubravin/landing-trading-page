<template>
  <section class="contact" id="contact">
    <div class="contact__info-container">
      <h2 class="section-title contact__title">Contact us!</h2>
      <p class="contact__info">
        The support staff and customer service are available to help you with
        any questions or needs you might have. Just drop us a line.
      </p>
      <p class="contact__site-owner">
        This site is owned and operated by Kode Tech Solutions LTD
      </p>
      <div class="contact__contacts-container">
        <p class="contact__contact-type">Phone:</p>
        <p class="contact__contact-address">442038857261</p>
      </div>
      <div class="contact__contacts-container">
        <p class="contact__contact-type">Email:</p>
        <p class="contact__contact-address">help@google.com</p>
      </div>
      <div class="contact__contacts-container">
        <p class="contact__contact-type">Address:</p>
        <p class="contact__contact-address">
          Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro,
          Republic of the Marshall Islands, MH 96960
        </p>
      </div>
    </div>
    <div class="contact__form-container">
      <p v-show="isSubmitted" class="contact__success-message">
        We contact you soon
      </p>
      <FormComponent @formSubmitted="onFormSubmit" />
    </div>
    <div class="bg-color-container"></div>
  </section>
</template>
<script>
import FormComponent from './UI/FormComponent.vue'

export default {
  components: { FormComponent },
  data() {
    return { isSubmitted: false }
  },
  methods: {
    onFormSubmit() {
      this.isSubmitted = true
    },
  },
}
</script>
<style lang="scss">
.contact {
  position: relative;
  padding: 120px;
  display: flex;
  justify-content: space-between;

  @include onTablet {
    flex-direction: column;
    padding: 48px 130px;
  }
  @include onMobile {
    flex-direction: column;
    padding: 48px 20px;
  }

  &__title {
    margin-bottom: 32px;
  }

  &__info-container {
    color: $gray-400;
    max-width: 470px;

    @include onTablet {
      margin-bottom: 48px;
      max-width: 100%;
    }

    @include onMobile {
      margin-bottom: 48px;
    }
  }
  &__info {
    margin-bottom: 48px;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
  }

  &__site-owner {
    color: $gray-400;
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;
    margin-bottom: 24px;
  }

  &__contacts-container {
    margin-bottom: 16px;
  }

  &__contact-type {
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: $gray-500;
    margin-bottom: 8px;
  }

  &__contact-address {
    color: $gray-400;
    font-size: 16px;
    line-height: 27px;
    font-weight: 300;
  }

  &__form-container {
    position: relative;
    flex-grow: 1;
    max-width: 585px;
    align-self: flex-start;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid $violet-500;
    padding: 80px;

    @include onTablet {
      width: 100%;
      max-width: 100%;
      padding: 80px 42px;
    }
    @include onMobile {
      width: 100%;
      padding: 48px 16px;
    }
  }

  &__success-message {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    border-radius: 10px;
    background-color: #0eac00;
    color: #fff;
    padding: 7px 15px;
    min-width: 190px;
  }
}

.bg-color-container {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: $violet-500;
  opacity: 0.1;
  z-index: -1;
  width: 100%;
  height: 100%;
  @include onMobile {
    background: #4f62f6;
  }
}
</style>
