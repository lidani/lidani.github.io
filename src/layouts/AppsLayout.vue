<template>
  <main>
    <q-page-container class="bg-primary q-pa-md">
      <router-view :app="app" v-if="app.id" />
      <AppList v-else />
    </q-page-container>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import AppList from "components/apps/AppList.vue";

export default defineComponent({
  name: "AppsLayout",
  components: { AppList, AppList },
  props: {
    app: { default: () => ({}) },
  },
});
</script>
