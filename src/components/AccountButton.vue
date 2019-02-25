<template>
  <navigation-menu>
    <template slot="summary"
      >Account
    </template>
    <template slot="details-content">
      <ul data-vue-summary-list>
        <li>
          <router-link data-vue-summary-link to="/orders"
            >Past Orders</router-link
          >
        </li>
        <li>
          <router-link data-vue-summary-link to="/settings"
            >My Settings</router-link
          >
        </li>
      </ul>
    </template>
  </navigation-menu>
</template>

<script>
import NavigationMenu from "./NavigationMenu";

export default {
  components: {
    NavigationMenu
  }
};
</script>

<style>
[data-vue-summary-list] {
  list-style: none;
  margin: 0;
  padding: 0;
}

[data-vue-summary-link] {
  color: inherit;
  text-decoration: none;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  padding: 0 10px;
  display: block;
}

[data-vue-summary-link]:focus {
  outline: 0;
  background-color: #2368a2;
  color: #fff;
  display: block;
}

[data-vue-summary-link]:hover {
  outline: 0;
  background-color: #2368a2;
  color: #fff;
  display: block;
}

[aria-current] {
  font-weight: 700;
}

/*[tabindex="-1"]:focus,*/
/**::-moz-focus-inner {*/
/*border: 0;*/
/*}*/
/**/
</style>
