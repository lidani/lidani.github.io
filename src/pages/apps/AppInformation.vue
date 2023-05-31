<template>
  <main>
    <q-page-container class="bg-primary q-pa-md">
      <template v-if="(app.actions || {}).privacy">
        <component :is="app.actions.privacy" />
      </template>
    </q-page-container>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const defaultAction = "privacy-policy";

export default defineComponent({
  props: {
    app: { required: true, default: () => ({}) },
    action: { required: false },
  },
  setup(props) {
    const $router = useRouter();

    if (!props.action) {
      $router.push({
        params: { app: props.app.id, action: defaultAction },
      });
    }
  },
});
</script>
