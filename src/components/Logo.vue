<template>
  <router-link to="/" class="c-logo">Accessibooks</router-link>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss" scoped>
.c-logo {
  font-family: Georgia, Droid Serif, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 2.125rem;
  color: inherit;
  text-decoration: none;
  margin-bottom: 1.25rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media (max-width: 37.5em) {
    margin: 1.25rem 0;
  }
}
</style>
