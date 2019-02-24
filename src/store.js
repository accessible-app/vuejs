import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    enhancedFocus: false,
    shoppingCartItems: []
  },
  mutations: {
    toggleEnhancedFocus(state) {
      state.enhancedFocus = !state.enhancedFocus;
    },
    toggleShoppingCartState(state, product) {
      if (state.shoppingCartItems.includes(product)) {
        // Remove from shopping cart
        state.shoppingCartItems = state.shoppingCartItems.filter(
          item => item !== product
        );
      } else {
        // Add to shopping cart
        state.shoppingCartItems.push(product);
      }
    },
    removeAllShoppingCartItems(state) {
      state.shoppingCartItems = [];
    }
  },
  getters: {
    getEnhancedFocus: state => {
      return state.enhancedFocus;
    },
    getProductIsInShoppingCart: (state) => (product) => {
      return state.shoppingCartItems.includes(product);
    },
    shoppingCartItems: state => {
      return state.shoppingCartItems;
    }
  }
});

export default store;
