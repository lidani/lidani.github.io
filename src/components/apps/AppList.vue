<template>
  <div class="row">
    <div
      class="column col-xs-12 col-md-6 col-lg-4 q-pa-md"
      v-for="(app, i) in apps"
      :key="i"
    >
      <q-card style="border-radius: 24px">
        <AppPreview @image-click="onImageClick" :app="app" />
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppPreview from "src/components/apps/AppPreview.vue";

import apps from "src/constants/apps";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { AppPreview },
  setup() {
    const $router = useRouter();

    const onImageClick = (app) => {
      if (app.hasExternalPrivacy) {
        return window.open(app.actions.privacy, "_blank");
      }

      $router.push({
        name: "apps-app-information",
        params: { app: app.id },
      });
    };

    return {
      apps: Object.values(apps).filter((i) => !i.hidden),
      onImageClick,
    };
  },
});
</script>
