<template>
  <div>
    <!-- UserActions will consist of 2 dedicated menu buttons. Until then: -->
    <button type="button" class="o-button " @click="openDialog">Shopping Cart <small>(0)</small></button>
    <button type="button" class="o-button " @click="openDialog">My Account</button>
    <portal to="dialog">
      <a11y-dialog
        :class-names="{
          base: 'dialog',
          overlay: 'dialog-overlay',
          element: 'dialog-content',
          closeButton: 'dialog-close'
        }"
        role="alertdialog"
        disable-native
        id="app-dialog"
        app-root="#wrapper"
        @dialog-ref="assignDialogRef"
      >
        <h1 class="dialog-title" slot="title">Content not yet ready</h1>
        <Hint>
          The ShoppingCart and Account components are yet to be built (and documented).
          <a class="o-link" href="https://marcus.io/blog/a11y-app-dialogs-modals"
            >But since this is a modal window, you can read more about them on
            marcus.io</a
          >.
        </Hint>
      </a11y-dialog>
    </portal>
  </div>
</template>

<script>
import Hint from "../components/Hint";

export default {
  name: "UserActions",
  components: { Hint },
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

<style scoped></style>
