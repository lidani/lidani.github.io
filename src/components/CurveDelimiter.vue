<template>
  <svg
    style="margin-bottom: -6px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      v-bind="$attrs"
      :fill="fill"
      fill-opacity="1"
      d="M0,32L80,69.3C160,107,320,181,480,181.3C640,181,800,107,960,96C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    fill: { default: "var(--q-primary)" },
  },
});
</script>
