<template>
  <Form
    v-slot="{ meta }"
    class="form"
    @submit="submit"
    :validation-schema="registerSchema"
  >
    <div class="field">
      <Field name="name" v-slot="{ field, errors, meta }">
        <input
          placeholder="Name"
          v-bind="field"
          type="text"
          class="field__input"
          :class="{ field__error: !!errors.length, field__valid: meta.valid }"
        />
      </Field>
      <ErrorMessage class="field__error-message" name="name" />
    </div>

    <div class="field">
      <Field name="email" type="email" v-slot="{ field, errors, meta }">
        <input
          placeholder="Email"
          v-bind="field"
          type="email"
          class="field__input"
          :class="{ field__error: !!errors.length, field__valid: meta.valid }"
        />
      </Field>
      <ErrorMessage class="field__error-message" name="email" />
    </div>
    <Field
      class="field__input field__textarea"
      as="textarea"
      placeholder="Message"
      name="message"
    />
    <button :disabled="!meta.valid" class="btn-primary form__btn">Send</button>
  </Form>
</template>
<script>
import { registerSchema } from '@/utils/validation'
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      registerSchema,
    }
  },
  methods: {
    submit(values, actions) {
      actions.setValues({
        name: '',
        email: '',
        password: '',
      })

      this.$emit('formSubmitted')
    },
  },
}
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;

  &__btn {
    width: 172px;
    height: 54px;
    margin: 0 auto;
  }
}

.field {
  width: 100%;
  margin-bottom: 24px;

  &__input {
    font-family: 'MuseoSans';
    outline: none;
    border: 1px solid $gray-100;
    border-radius: 3px;
    width: 100%;
    height: 40px;
    padding: 7px 16px;
    color: $gray-400;
    font-weight: 500;
  }

  &__error-message {
    display: block;
    margin-top: 8px;
    color: #eb5757;
    font-weight: 700;
  }

  &:focus,
  :active {
    border: 1px solid $gray-300;
  }

  &__error {
    border: 1px solid #eb5757;
    font-size: 15px;
  }

  &__valid {
    border: 1px solid #0eac00;
  }

  &::placeholder {
    font-family: 'MuseoSans';
    font-weight: 300;
    color: $gray-300;
  }

  &__textarea {
    height: 90px;
    resize: none;
    margin-bottom: 40px;
  }
}
</style>
