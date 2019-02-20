<template>
  <div class="home">
    <h1 ref="componentFocusTarget">
      The place for great books on web accessibility
    </h1>
    <p>Following books are available:</p>
    <product-table />
  </div>
</template>

<script>
import ProductTable from "../components/ProductTable";

export default {
  name: "home",
  components: { ProductTable },
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
