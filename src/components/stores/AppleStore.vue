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
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  props: {
    app: { default: () => ({}) },
  },
  setup(props) {
    const $q = useQuasar();

    const href = `https://itunes.apple.com/us/app/id${
      props.app.applestore
    }?platform=${$q.platform.is.ipad ? "ipad" : "iphone"}`;

    return {
      href,
      onClick() {
        return window.open(href, "_blank");
      },
    };
  },
});
</script>
