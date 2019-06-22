<template>
  <navigation-menu>
    <template slot="button"
      >Account
    </template>
    <template slot="content">
      <ul data-vue-summary-list>
        <li>
          <router-link data-menu-item to="/orders"
            >Past Orders</router-link
          >
        </li>
        <li>
          <router-link data-menu-item to="/settings"
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

[data-menu-item] {
  color: inherit;
  text-decoration: none;
  line-height: 28px;
  height: 28px;
  cursor: pointer;
  padding: 0 10px;
  display: block;
}

[data-menu-item]:focus {
  outline: 0;
  background-color: #2368a2;
  color: #fff;
  display: block;
}

[data-menu-item]:hover {
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
