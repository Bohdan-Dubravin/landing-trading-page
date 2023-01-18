<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default { name: 'violet-button' };
</script>
<style lang="scss">
.btn {
  background: $violet-300;
  outline: none;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 60px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: $violet-200;
  }

  &:active {
    background: $violet-400;
  }

  &:disabled {
    background: $gray-100;
    color: $gray-300;
  }
}
</style>
