<template>
  <aside aria-labelledby="c-a11yapp__title" class="c-a11yapp">
    <h2 id="c-a11yapp__title" class="c-a11yapp__title">Accessible App Debugging</h2>
    <switch-button class="c-a11yapp__switch" @click="toggleFocusIndicator">
      Show red focus indicator on everything, even non-interactive
      elements</switch-button
    >
  </aside>
</template>

<script>
import store from "../../store";
import SwitchButton from "./components/SwitchButton.vue";

export default {
  name: "AccessibleAppInfo",
  components: {
    SwitchButton
  },
  store,
  methods: {
    toggleFocusIndicator: function() {
      store.commit("toggleEnhancedFocus");
    }
  }
};
</script>

<style lang="scss">
.c-a11yapp {
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: .875rem;
  background-color: #c7c7c7;
  border: 2px solid dimgrey;
  padding: .5em;
  margin: 1rem;

  &__title {
    font-weight: 700;
    margin-bottom: 0;
  }

  &__switch {
    button[role="switch"] {
      margin-left: .5rem;
      background: transparent;
      padding: 0.1rem;
      border-width: 2px;
    }
  }

  &--enhanced-focus *:focus {
    outline: 2px solid red !important;
  }
}

</style>
