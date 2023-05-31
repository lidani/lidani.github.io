<template>
  <div class="column text-center q-pa-lg" style="background-color: #f5f5f7">
    <q-img
      class="q-mx-auto cursor-pointer"
      style="border-radius: 40px"
      width="180px"
      :src="`/src/assets/apps/${app.id}.png`"
      @click="$emit('image-click', app)"
    />
    <h5>
      {{ app.title }}
    </h5>

    <div class="q-mt-sm row justify-center">
      <apple-store class="q-mr-xs" :app="app" />
      <play-store class="q-ml-xs" :app="app" />
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
