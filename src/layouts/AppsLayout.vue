<template>
  <main>
    <q-page-container class="bg-primary q-pa-md">
      <router-view :app="app" v-if="$route.name !== 'apps'" />
      <div class="row justify-center" v-else>
        <div
          class="column col-xs-12 col-sm-6 col-lg-4 q-pa-md"
          v-for="(app, i) in apps"
          :key="i"
        >
          <q-card>
            <AppPreview
              @image-click="
                () =>
                  $router.push({
                    name: 'apps-app-information',
                    params: { app: app.id },
                  })
              "
              :app="app"
            />
          </q-card>
        </div>
      </div>
    </q-page-container>
  </main>
</template>

<script>
import { defineComponent } from "vue";

import apps from "src/constants/apps";
import AppPreview from "src/components/apps/AppPreview.vue";

export default defineComponent({
  name: "AppsLayout",
  props: {
    app: { default: () => ({}) },
  },
  setup() {
    return {
      apps: Object.values(apps).filter((i) => !i.hidden),
    };
  },
  components: { AppPreview },
});
</script>
