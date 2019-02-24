<template>
  <div class="about">
    <h1 ref="componentFocusTarget">My settings</h1>

    <label
      ><input
        type="checkbox"
        v-model="reducedMotion"
        @change="toggleReducedMotion"
      />
      Disable animations</label
    >
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      reducedMotion: false
    };
  },
  name: "settings",
  methods: {
    toggleReducedMotion() {
      store.commit("toggleReducedMotion");
    }
  }
};
</script>
