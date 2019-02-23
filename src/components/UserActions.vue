<template>
  <div class="c-user-actions">
    <shopping-cart-menu />
    <account-button />
  </div>
</template>

<script>
import Hint from "../components/Hint";
import AccountButton from "../components/AccountButton";
import ShoppingCartMenu from "../components/ShoppingCartMenu";

export default {
  name: "UserActions",
  components: { Hint, AccountButton, ShoppingCartMenu },
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
    margin-right: 10px;
  }

</style>
