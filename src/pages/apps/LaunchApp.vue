<template>
  <div class="window-height window-width column">
    <div class="q-mx-auto q-my-auto text-center">
      <app-preview :app="app" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppPreview from "components/apps/AppPreview.vue";

export default defineComponent({
  components: { AppPreview },
  props: {
    app: { default: () => ({}) },
  },
  async created() {
    if (!this.app.title) {
      return this.$router.replace({ name: "home" });
    }

    await new Promise((res) => setTimeout(res, 1000));

    this.$q.platform.is.android
      ? window.location.replace(
          `intent://#Intent;scheme=https;package=${this.app.android};end`
        )
      : this.$q.platform.is.ios
      ? (() => {
          window.location.replace(`${this.app.ios}://`);

          window.setTimeout(() => {
            window.location.replace(
              `itms-apps://itunes.apple.com/us/app/id${
                this.app.applestore
              }?platform=${this.$q.platform.is.ipad ? "ipad" : "iphone"}`
            );
          }, 1000);
        })()
      : null;
  },
});
</script>
