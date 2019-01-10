<template>
  <div class="c-hint"><slot></slot></div>
</template>

<script>
export default {
  name: "Hint"
};
</script>

<style lang="scss" scoped>
$bg-color: #fffcf3;
$border-color: #fae29f;
$border-color: #fae29f;

.c-hint {
  border: 1px solid $border-color;
  background-color: $bg-color;
  padding: 1rem;
  line-height: 1.6;
}
</style>
