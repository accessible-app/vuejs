<template>
  <div class="shopping-cart">
    <transition name="bounce">
      <div
        class="shopping-cart__item-count"
        :key="numberOfCartItems"
        v-show="numberOfCartItems"
      >
        {{ numberOfCartItems }}
      </div>
    </transition>
    <details ref="details">
      <summary data-vue-menu-button ref="button">Shopping Cart</summary>
      <div class="c-shopping-cart" data-vue-menu>
        <div v-if="shoppingCartItems.length">
          <ul
            class="c-shopping-cart__list"
            :key="item.id"
            v-for="item in shoppingCartItems"
          >
            <li class="c-shopping-cart__list-item">
              {{ item.title }}
              <button
                data-close-button
                @click="removeItem(item)"
                aria-label="Remove product from shopping cart"
                class="o-button o-button--bare"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </li>
          </ul>
          <button
            @click="removeAllItems"
            class="u-button-link-look o-link c-shopping-cart__remove-all"
          >
            Remove all items
          </button>
        </div>
        <div v-if="!shoppingCartItems.length">
          Your shopping cart is empty <span aria-hidden>:(</span>
        </div>
      </div>
    </details>
  </div>
</template>

<script>
import store from "../store";

export default {
  created() {
    document.addEventListener("click", this.documentClick);
  },
  computed: {
    shoppingCartItems: function() {
      return store.getters.shoppingCartItems;
    },
    numberOfCartItems: function() {
      return this.shoppingCartItems.length;
    }
  },
  methods: {
    documentClick(e) {
      let el = this.$refs.details;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.closeHandler();
      }
    },
    removeItem(item) {
      store.commit("toggleShoppingCartState", item);

      setTimeout(() => {
        // Only here query for data-close-buttons
        let closeButtons = this.$refs.details.querySelectorAll(
          "[data-close-button]"
        );

        if (closeButtons.length) {
          closeButtons[0].focus();
        }

        if (!this.numberOfCartItems) {
          // If last cart item gets removed, send focus to Shopping Cart trigger instead
          this.focusTrigger();
        }
      });
    },
    removeAllItems() {
      store.commit("removeAllShoppingCartItems");
      this.$refs.details.setAttribute("open", "");

      this.focusTrigger();
    },
    closeHandler() {
      this.$refs.details.removeAttribute("open");
    },
    focusTrigger() {
      this.$refs.button.focus();
    }
  }
};
</script>

<style scoped>
[open] [data-vue-menu] {
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

.c-shopping-cart[data-vue-menu] {
  padding: 10px;
}

.c-shopping-cart__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.c-shopping-cart__list-item {
  display: flex;
  justify-content: space-between;
  margin: 0.75rem 0;
}

.c-shopping-cart__remove-all {
  margin-top: 0.66rem;
  float: right;
}

[data-vue-menu-button] {
  list-style: none;
}

[data-vue-menu]::before {
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

[data-vue-menu]::after {
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

[data-vue-menu-item],
[data-vue-menu-link] {
  color: inherit;
  text-decoration: none;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  padding: 0 10px;
  display: block;
}

[data-vue-menu-item]:focus,
[data-vue-menu-link]:focus {
  outline: 0;
  background-color: #2368a2;
  color: #fff;
  display: block;
}

[data-vue-menu-item]:hover,
[data-vue-menu-link]:hover {
  outline: 0;
  background-color: #2368a2;
  color: #fff;
  display: block;
}

[tabindex="-1"]:focus,
*::-moz-focus-inner {
  border: 0;
}

.shopping-cart {
  position: relative;
}

.shopping-cart__item-count {
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #484848;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
  font-weight: 700;
  font-size: 80%;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
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
