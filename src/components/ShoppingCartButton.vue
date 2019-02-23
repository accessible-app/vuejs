<template>
  <button
    class="o-button o-button--secondary"
    @click="toggleShoppingCartState(productId)"
  >
    {{ label }}
  </button>
</template>

<script>
import store from "../store";

export default {
  computed: {
    label: function () {
      return (store.getters.getProductIsInShoppingCart(this.productId)) ? "Remove from cart" : "Add to cart";
    }
  },
  props: ["product-id"],
  methods: {
    toggleShoppingCartState: function(id) {
      store.commit("toggleShoppingCartState", id);
    }
  }
};
</script>
