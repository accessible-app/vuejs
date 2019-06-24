<template>
  <div class="c-user-actions">
    <shopping-cart-menu />
    <account-menu />
  </div>
</template>

<script>
import AccountMenu from "../components/AccountNavigationMenu";
import ShoppingCartMenu from "../components/ShoppingCartMenu";

export default {
  name: "UserActions",
  components: { AccountMenu, ShoppingCartMenu },
  methods: {
    assignDialogRef(dialog) {
      this.dialog = dialog;
    },

    openDialog() {
      if (this.dialog) {
        this.dialog.show();
      }
    }
  }
};
</script>

<style scoped>
.c-user-actions {
  display: flex;
}
.c-user-actions > * {
  margin-right: 20px;
}
</style>
