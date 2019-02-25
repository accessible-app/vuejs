<template>
  <div
    id="app"
    v-bind:class="{
      'c-a11yapp--enhanced-focus': enhancedFocus,
      'user-prefers-reduced-motion-reduce': reducedMotion
    }"
  >
    <div id="wrapper">
      <header role="banner">
        <div class="c-top-bar">
          <div class="o-layout-inner c-top-bar__wrapper">
            <Logo />
            <Navigation ref="navMain" />
          </div>
        </div>
        <div class="o-layout-inner c-top-bar__footer">
          <UserActions />
          <Logline />
        </div>
      </header>
      <div class="o-layout-inner">
        <main role="main" class="c-content">
          <router-view ref="routerView"></router-view>
        </main>
      </div>
      <AccessibleAppInfo />
      <footer role="contentinfo"></footer>
    </div>
    <portal-target name="dialog" multiple></portal-target>
  </div>
</template>

<script>
import store from "./store";
import Logo from "./components/Logo.vue";
import Navigation from "./components/Navigation";
import UserActions from "./components/UserActions";
import Logline from "./components/Logline";
import AccessibleAppInfo from "./components/accessibleapp/AccessibleAppInfo";

export default {
  store,
  computed: {
    enhancedFocus() {
      return store.getters.getEnhancedFocus;
    },
    reducedMotion() {
      return store.getters.getReducedMotion;
    }
  },
  components: { Logline, Navigation, Logo, UserActions, AccessibleAppInfo },
  watch: {
    $route: function(to) {
      // $nextTick = DOM updated
      this.$nextTick(function() {
        // Change document title
        document.title = to.meta.title;

        // Focus management on route change
        setTimeout(() => {
          // Get component's "routeFocusTarget" ref.
          // If not existent, use router view container
          let focusTarget =
            this.$refs.routerView.$refs.componentFocusTarget !== undefined
              ? this.$refs.routerView.$refs.componentFocusTarget
              : this.$refs.routerView.$el;

          // Make focustarget programmatically focussable
          focusTarget.setAttribute("tabindex", "-1");

          // Focus element
          focusTarget.focus();

          // setAriaCurrent in navigation only after focus management
          this.setAriaCurrent();
        }, 0);
      });
    }
  },
  mounted() {
    this.setAriaCurrent();
  },
  methods: {
    setAriaCurrent() {
      this.$nextTick(function() {
        let app = this.$el,
          currents = app.querySelectorAll("[aria-current]");

        if (currents) {
          currents.forEach(current => {
            current.removeAttribute("aria-current");
          });
        }

        app.querySelectorAll(".router-link-exact-active").forEach(current => {
          current.setAttribute("aria-current", "page");
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/base.scss";
</style>
