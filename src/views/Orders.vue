<template>
  <div class="about">
    <h1 ref="componentFocusTarget">This is the orders page</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      It has been the industry's standard dummy text ever since the 1500s, when
      an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button class="o-button o-button--bare" @click="startFakeQueryForOrders" v-if="!queryComplete && !isLoading">
      Click here to query our database for your past orders
    </button>
    <div v-if="isLoading">
      <label for="loading-progress">Loading progress:</label>
      <ProgressBar ref="progressbar" id="loading-progress" :value="value" />
    </div>
    <div v-if="queryComplete" ref="loadedContent" tabindex="-1">
      <h2>Your past orders</h2>
      <ul>
        <li>Accessibility For Everyone</li>
        <li>Inclusive Components</li>
        <li>Inclusive Design Patterns</li>
        <li>Pro HTML5 Accessibility</li>
        <li>Color Accessibility Workflows</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProgressBar from "../components/ProgressBar";
export default {
  data() {
    return {
      isLoading: false,
      queryComplete: false,
      value: 0
    };
  },
  name: "orders",
  components: {
    ProgressBar
  },
  methods: {
    startFakeQueryForOrders() {
      this.isLoading = true;

      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.progressbar.$el.focus();
        });
      });

      setInterval(this.fakeProgressIntervall, 1000);
    },
    fakeProgressIntervall() {
      if (this.value <= 100) {
        this.value = this.value + 10;
      }
    },
    focusLoadedFakeContent() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.loadedContent.focus();
        }, 750);
      });
    }
  },
  watch: {
    value (value) {
      if (value >= 100) {
        clearInterval(this.fakeProgressIntervall);
        this.isLoading = false;
        this.queryComplete = true;
        this.focusLoadedFakeContent();
      }
    }
  }
};
</script>
