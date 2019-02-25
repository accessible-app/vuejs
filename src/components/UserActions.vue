<template>
  <div class="c-user-actions">
    <shopping-cart-menu />
    <account-button />

  </div>
</template>

<script>
import AccountButton from "../components/AccountButton";
import ShoppingCartMenu from "../components/ShoppingCartMenu";
import NavigationMenu from "../components/NavigationMenu";

export default {
  name: "UserActions",
  components: { AccountButton, ShoppingCartMenu, NavigationMenu },
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
