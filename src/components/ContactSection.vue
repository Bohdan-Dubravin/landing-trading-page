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
      <FormComponent />
    </div>
  </section>
</template>
<script>
import FormComponent from './UI/FormComponent.vue';

export default { components: { FormComponent } };
</script>
<style lang="scss">
.contact {
  padding: 120px;
  display: flex;
  justify-content: space-between;

  &__title {
    margin-bottom: 32px;
  }

  &__info-container {
    color: $gray-400;
    max-width: 470px;
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
    flex-grow: 1;
    max-width: 585px;
    max-height: 470px;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid $violet-500;
    padding: 80px;
  }
}
</style>
