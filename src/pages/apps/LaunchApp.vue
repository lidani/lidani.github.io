<template>
  <div class="window-height window-width column">
    <div class="q-mx-auto q-my-auto text-center">
      <app-preview :app="app" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import AppPreview from "components/apps/AppPreview.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { AppPreview },
  props: {
    app: { default: () => ({}) },
  },
  setup(props) {
    const $router = useRouter(),
      $q = useQuasar();

    if (!props.app.title) {
      return $router.replace({ name: "home" });
    }

    const launch = () => {
      if ($q.platform.is.android) {
        return window.location.replace(
          `intent://#Intent;scheme=https;package=${props.app.android};end`
        );
      }

      if ($q.platform.is.ios) {
        window.location.replace(`${props.app.ios}://`);

        setTimeout(() => {
          window.location.replace(
            `itms-apps://itunes.apple.com/us/app/id${
              props.app.applestore
            }?platform=${$q.platform.is.ipad ? "ipad" : "iphone"}`
          );
        }, 1000);
      }
    };

    setTimeout(launch, 1000);

    return {};
  },
});
</script>
