<template>
  <ul class="nav__bar">
    <li class="nav_item">
      <a class="nav_link" href="#questions">How it works</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#comments">About</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#steps">Instructions</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#contact">Accounts</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#contact">Platforms</a>
    </li>
    <li class="nav_item">
      <a class="nav_link" href="#contact">Contact</a>
    </li>
  </ul>
</template>
<script>
export default {}
</script>
<style lang="scss">
.nav__bar {
  display: flex;

  @include onTablet {
    flex-direction: column;
  }

  @include onMobile {
    flex-direction: column;
  }
}

.nav_item {
  margin-right: 32px;

  @include onTablet {
    margin-bottom: 16px;
  }

  @include onMobile {
    margin-bottom: 16px;
  }

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
