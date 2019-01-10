import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        enhancedFocus: false
    },
    mutations: {
        toggleEnhancedFocus (state) {
            state.enhancedFocus = !state.enhancedFocus;
        }
    },
    getters: {
        getEnhancedFocus: state => {
            return state.enhancedFocus;
        }
    }
});

export default store;