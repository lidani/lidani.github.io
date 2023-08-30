<template>
  <a :href="href" @click.stop.prevent="onClick">
    <q-img
      class="cursor-pointer"
      width="136px"
      height="40px"
      src="~assets/appstore.png"
    />
  </a>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  props: {
    app: { default: () => ({}) },
  },
  setup(props) {
    const $q = useQuasar();

    const href = computed(() => props.app.applestore);

    return {
      href,
      onClick() {
        return window.open(href.value, "_blank");
      },
    };
  },
});
</script>
