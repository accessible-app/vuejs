<template>
    <button
      class="o-button o-button--secondary"
      @click="toggleShoppingCartState(product)"
    >
      {{ label }}
    </button>
</template>

<script>
import store from "../store";

export default {
  computed: {
    label: function() {
      return store.getters.getProductIsInShoppingCart(this.product)
        ? "Remove from cart"
        : "Add to cart";
    },

  },
  props: ["product"],
  methods: {
    toggleShoppingCartState: function(product) {
      store.commit("toggleShoppingCartState", product);
    }
  }
};
</script>
