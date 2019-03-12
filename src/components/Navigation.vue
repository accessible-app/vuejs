<template>
  <nav aria-labelledby="main-nav-title">
    <h2 class="u-visually-hidden" id="main-nav-title">Main Menu</h2>
    <ul class="c-nav-main">
      <li><router-link to="/">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
.c-nav-main {
  font-size: 1.125rem;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin: 0 1rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    // See: https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/
    &:before {
      content: "\200B"; /* add zero-width space */
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: $textcolor-brand-primary;
    padding-bottom: 1.5625rem;

    @media (max-width: 37.5em) {
      padding-bottom: 1rem;
    }

    &:focus {
      text-decoration: underline;
      outline: 0;
    }
  }

  [aria-current] {
    font-weight: 700;
    border-bottom: 0.5rem solid $textcolor-brand-primary;
  }
}
</style>
