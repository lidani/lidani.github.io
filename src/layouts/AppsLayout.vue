<template>
  <main>
    <q-page-container class="bg-primary q-pa-lg">
      <router-view
        :app="apps[$route.params.id]"
        v-if="$route.name !== 'apps'"
      />
      <div class="flex flex-center page-height" v-else>COMING SOON</div>
    </q-page-container>
  </main>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "AppsLayout",

  computed: {
    apps() {
      return {
        "tereh-juliana": {
          title: "Tereh Juliana",
          actions: {
            privacy: defineAsyncComponent(() =>
              import("src/privacy-policy/TerehJuliana.vue")
            ),
          },
          appstore: "",
          googleplay: "",
          site: "",
        },
        reumathuem: {
          title: "Reumathuem",
          appstore: "",
          googleplay: "",
          site: "",
        },
      };
    },
  },
});
</script>
