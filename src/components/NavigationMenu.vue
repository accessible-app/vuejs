<template>
  <div>
    <slot name="head"></slot>
    <details ref="details">
      <summary data-vue-details-summmary ref="summary"
        ><slot name="summary"></slot
      ></summary>
      <div data-vue-details-content @click="closeHandler">
        <slot name="details-content"></slot>
      </div>
    </details>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  created() {
    document.addEventListener("click", this.documentClick);
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.details;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.closeHandler();
      }
    },
    closeHandler() {
      this.$refs.details.removeAttribute("open");
    }
  }
};
</script>

<style scoped>
[open] [data-vue-details-content] {
  background-color: #ffffff;
  list-style: none;
  margin: 10px 0 0 0;
  min-width: 320px;
  padding: 10px 0;
  border: 1px solid #2368a2;
  animation: slide-down 0.2s ease;
  position: absolute;
  z-index: 10;
  box-shadow: 4px 4px 6px 0 #6665654d;
}

[data-vue-details-summmary] {
  list-style: none;
}

[data-vue-details-content]::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #2368a2;
  top: -7px;
  left: 15px;
}

[data-vue-details-content]::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid white;
  top: -6px;
  left: 16px;
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
