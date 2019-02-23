<template>
  <div class="o-table">
    <table class="o-table__table">
      <thead>
        <tr class="o-table__row">
          <th class="o-table__cell--header">Title</th>
          <th class="o-table__cell--header">Author</th>
          <th class="o-table__cell--header">Published</th>
          <th class="o-table__cell--header">Price</th>
          <th class="o-table__cell--header">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="book.id" v-for="book in books" class="o-table__row">
          <td class="o-table__cell--data"><b>{{ book.title }}</b></td>
          <td class="o-table__cell--data">{{ book.author }}</td>
          <td class="o-table__cell--data">{{ book.published }}</td>
          <td class="o-table__cell--data o-table__cell--price">{{ book.price | toEUR }}</td>
          <td class="o-table__cell--data">
            <button
              @click="openDialog(book.id)"
              class="o-button o-button--secondary"
            >
              More Info
            </button>
            <shopping-cart-button :product="book"></shopping-cart-button>
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
                :data-id="book.id"
                @dialog-ref="assignDialogRef"
              >
                <h1 class="dialog-title" slot="title">
                  <b>{{ book.title }}</b>
                </h1>
                <p>This is an awesome book from {{ book.author }}, published {{ book.published }}. Go to <a class="o-link" :href="book.info">{{ book.info }}</a> to learn more.</p>
              </a11y-dialog>
            </portal>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShoppingCartButton from "../components/ShoppingCartButton";

export default {
  name: "ProductTable",
  components: {
    ShoppingCartButton
  },
  methods: {
    assignDialogRef(dialog) {
      let id = dialog.dialog.parentNode.dataset.id;
      this.dialogs[id] = dialog;
    },
    openDialog(i) {
      if (this.dialogs[i]) {
        this.dialogs[i].show();
      }
    }
  },

  data: function() {
    return {
      dialogs: [],
      books: [
        {
          id: 1,
          title: "Accessibility For Everyone",
          author: "Laura Kalbag",
          published: 2017,
          price: 2476,
          info: "https://abookapart.com/products/accessibility-for-everyone"
        },
        {
          id: 2,
          title: "Inclusive Components",
          author: "Heydon Pickering",
          published: 2018,
          price: 1800,
          info: "http://inclusive-components.design/"
        },
        {
          id: 3,
          title: "Inclusive Design Patterns",
          author: "Heydon Pickering",
          published: 2016,
          price: 1490,
          info:
            "https://shop.smashingmagazine.com/products/inclusive-design-patterns-by-heydon-pickering-ebook"
        },
        {
          id: 4,
          title: "Pro HTML5 Accessibility",
          author: "Joshue O'Connor",
          published: 2012,
          price: 3699,
          info: "https://www.apress.com/gp/book/9781430241942"
        },
        {
          id: 5,
          title: "Color Accessibility Workflows",
          author: "Geri Ciady",
          published: 2017,
          price: 683,
          info: "https://abookapart.com/products/color-accessibility-workflows"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
