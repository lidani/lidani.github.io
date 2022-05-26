<template>
  <div
    class="column text-center q-pa-xl rounded-borders"
    style="background-color: #f5f5f7"
  >
    <q-img
      class="q-mx-auto cursor-pointer"
      style="border-radius: 40px"
      width="180px"
      :src="`/src/assets/apps/${app.id}.png`"
      @click="$emit('image-click')"
    />
    <h3>
      {{ app.title }}
    </h3>

    <div class="q-mt-md row justify-center">
      <apple-store :app="app" />
      <play-store :app="app" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppleStore from "../stores/AppleStore.vue";
import PlayStore from "../stores/PlayStore.vue";

export default defineComponent({
  components: { AppleStore, PlayStore },
  props: {
    app: { default: () => ({}) },
  },
});
</script>
