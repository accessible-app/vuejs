<template>
  <div ref="menu">
    <slot name="head"></slot>
    <button
      :disabled="isDisabled"
      class="o-button"
      :aria-expanded="open.toString()"
      :aria-controls="id"
      @click="toggleOpen"
      data-button
    >
      <slot name="button"></slot>
    </button>
    <div
      data-content
      :id="id"
      :hidden="!open"
      @click="closeHandler"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      open: false,
      id: null
    };
  },
  props: ["is-disabled"],
  name: "VueMenu",
  created() {
    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    this.id = Math.random()
      .toString(36)
      .substring(2, 15);

    window.addEventListener("keyup", e => {
      if (e.key === "Escape") {
        this.closeHandler();
      }
    });
  },
  destroyed: function() {
    document.removeEventListener("keyup", this.closeHandler);
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    documentClick(e) {
      let el = this.$refs.menu;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.closeHandler();
      }
    },
    closeHandler() {
      this.open = false;
    }
  }
};
</script>

<style scoped>
[data-content] {
  background-color: #ffffff;
  list-style: none;
  margin: 10px 0 0 0;
  min-width: 300px;
  padding: 10px;
  border: 1px solid #2368a2;
  animation: slide-down 0.2s ease;
  position: absolute;
  z-index: 10;
  box-shadow: 4px 4px 6px 0 #6665654d;
}

[data-button] {
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
