<template>
  <div class="flex flex-center">
    COMING SOON

    <CurveDelimiter v-bind="$attrs" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CurveDelimiter from "src/components/CurveDelimiter.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CurveDelimiter },
});
</script>
