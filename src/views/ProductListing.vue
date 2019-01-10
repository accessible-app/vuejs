<template>
  <div class="home">
    <h1 ref="componentFocusTarget">
      The place for great books on web accessibility
    </h1>
    <Hint>
      The ProductTable component is yet to be built (and documented). As long as
      it is not ready, please enjoy this simple
      <button
        type="button"
        class="u-button-link-look o-link"
        @click="openDialog"
      >
        modal demo</button
      >.
    </Hint>
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
        <h1 class="dialog-title" slot="title">Thank you for clicking!</h1>
        <a class="o-link" href="https://marcus.io/blog/a11y-app-dialogs-modals"
          >This is a modal window, you can read more about them on marcus.io</a
        >.
      </a11y-dialog>
    </portal>
  </div>
</template>

<script>
import Hint from "../components/Hint";

export default {
  name: "home",
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
