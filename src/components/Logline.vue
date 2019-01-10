<template>
  <div class="c-logline">The vue.js demo of accessible-app.com</div>
</template>

<script>
export default {
  name: "Logline"
};
</script>

<style lang="scss" scoped>
.c-logline {
  font-family: IBM Plex Sans, sans-serif;
  font-style: italic;
  color: $color-brand-primary;

  @media (max-width: 37.5em) {
    display: none;
  }
}
</style>
