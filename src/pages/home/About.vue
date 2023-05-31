<template>
  <div class="flex column flex-center">
    <AppList />

    <CurveDelimiter v-bind="$attrs" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CurveDelimiter from "src/components/CurveDelimiter.vue";
import AppList from "src/components/apps/AppList.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CurveDelimiter, AppList },
});
</script>
