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
    toggleShoppingCartState(state, id) {
      if (state.shoppingCartItems.includes(id)) {
        // Remove from shopping cart
        state.shoppingCartItems = state.shoppingCartItems.filter(
          item => item !== id
        );
      } else {
        // Add to shopping cart
        state.shoppingCartItems.push(id);
      }
    }
  },
  getters: {
    getEnhancedFocus: state => {
      return state.enhancedFocus;
    },
    getProductIsInShoppingCart: (state) => (id) => {
      return state.shoppingCartItems.includes(id);
    },
    shoppingCartItems: state => {
      return state.shoppingCartItems;
    }
  }
});

export default store;
