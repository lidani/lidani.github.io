<template>
  <template v-if="(app.actions || {}).privacy">
    <component :is="app.actions.privacy" />
  </template>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    app: { default: () => ({}) },
    id: {},
    action: { required: false },
  },
});
</script>
