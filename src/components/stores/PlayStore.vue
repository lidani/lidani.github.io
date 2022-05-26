<template>
  <a :href="href" @click.stop.prevent="onClick">
    <q-img
      class="cursor-pointer"
      width="136px"
      height="40px"
      src="~assets/playstore.png"
    />
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    app: { default: () => ({}) },
  },
  setup(props) {
    const href = `https://play.google.com/store/apps/details?id=${props.app.android}`;

    return {
      href,
      onClick() {
        return window.open(href, "_blank");
      },
    };
  },
});
</script>
