<template>
  <div ref="actionmenu" >
    <slot name="head"></slot>
    <button
      :disabled="isDisabled"
      class="o-button"
      aria-haspopup="true"
      :aria-expanded="open.toString()"
      :aria-controls="id"
      @click="toggleOpen"
      @keyup.down="openMenuAndFocus(0)"
      @keyup.up="openMenuAndFocus(-1)"
      data-button
      ref="button"
    >
      <slot name="button"></slot>
    </button>
    <div
      data-content
      role="menu"
      :id="id"
      :aria-hidden="(!open).toString()"
      @click="closeHandler"
      @keydown.esc="closeHandler(true)"
      @keyup.down="focusNext"
      @keyup.up="focusPrev"
      ref="list"
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
      focusables: null,
      focusedMenuItem: null,
      id: null
    };
  },
  props: ["is-disabled"],
  name: "ActionMenu",
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
  updated: function() {
    this.focusables = this.$refs.list.querySelectorAll("button");
  },
  destroyed: function() {
    document.removeEventListener("keyup", this.closeHandler);
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
      if (this.open) {
        this.openMenuAndFocus(0);
      }
    },
    openMenuAndFocus(index) {
      this.open = true;
      this.focusedMenuItem = index === -1 ? this.focusables.length - 1 : index;
      this.setMenuItemFocus(this.focusedMenuItem);
    },
    documentClick(e) {
      let el = this.$refs.actionmenu;
      let target = e.target;
      if (
        el !== target &&
        !el.contains(target)
      ) {
        this.closeHandler();
      }
    },
    focusNext() {
      if (this.focusedMenuItem + 1 >= this.focusables.length) {
        this.focusedMenuItem = 0;
      } else {
        this.focusedMenuItem = this.focusedMenuItem + 1;
      }
      this.setMenuItemFocus(this.focusedMenuItem);
    },
    focusPrev() {
      if (this.focusedMenuItem === 0) {
        this.focusedMenuItem = this.focusables.length - 1;
      } else {
        this.focusedMenuItem = this.focusedMenuItem - 1;
      }
      this.setMenuItemFocus(this.focusedMenuItem);
    },
    setMenuItemFocus(index) {
      setTimeout(() => {
        this.focusables[index].focus();
      }, 0);
    },
    closeHandler(andFocusButton) {
      this.open = false;
      if (andFocusButton) this.$refs.button.focus();
    }
  }
};
</script>

<style scoped>
[data-content][aria-hidden="true"] {
  display: none;
}

[data-content][aria-hidden="false"] {
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
