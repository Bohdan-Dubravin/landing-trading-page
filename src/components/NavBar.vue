<template>
  <ul class="nav__bar">
    <li class="nav_item">
      <a class="nav_link" href="#questions">How it works</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#instructions">About</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#instructions">Instructions</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#">Accounts</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#">Platforms</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#contact">Contact</a>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss">
.nav__bar {
  display: flex;

  @include onMobile {
    display: none;
  }

  @include onTablet {
    display: none;
  }
}

.nav_item {
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
}
.nav_link {
  color: $gray-500;
  font-weight: 500;
  text-decoration: none;
  padding: 20px 0;

  &:hover {
    border-bottom: 2px solid $gray-500;
  }
}
</style>
