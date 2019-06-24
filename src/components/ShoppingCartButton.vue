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
    }
  },
  props: ["product"],
  methods: {
    toggleShoppingCartState: function(product) {
      store.commit("toggleShoppingCartState", product);

      let message = store.getters.getProductIsInShoppingCart(this.product)
          ? `${product.title} has been added to your cart`
          : `${product.title} has been removed from your cart`;

      this.$announcer.set(message);
    }
  }
};
</script>
