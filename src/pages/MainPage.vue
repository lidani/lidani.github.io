<template>
  <main>
    <q-page-container class="bg-primary">
      <div class="bg-primary">
        <q-banner class="bg-primary text-dark q-pa-xl">
          <div class="text-h2">Lidani Tecnologia</div>
          <div class="text-h5">Gustavo Lidani</div>
          <div class="text-h6">
            Fullstack Web Developer | iOS and Android Developer
          </div>
        </q-banner>

        <CurveDelimiter fill="var(--q-secondary)" />
      </div>

      <component
        v-for="(page, i) in components"
        :class="i % 2 !== 0 ? 'bg-primary' : 'bg-secondary'"
        :fill="i % 2 === 0 ? 'var(--q-primary)' : 'var(--q-secondary)'"
        :key="i"
        :is="page"
      />
    </q-page-container>
  </main>

  <q-footer>
    <q-banner
      class="text-dark"
      :class="`${components.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`"
    >
      <q-space></q-space>
      <div class="text-caption">
        e-mail: <a href="mailto:gustavo@lidani.dev">gustavo@lidani.dev</a>
      </div>
      <div class="text-caption">
        &copy;copyright {{ new Date().getFullYear() }} Lidani Tecnologia LTDA
        50.706.794/0001-81
      </div>
      <q-space></q-space>
    </q-banner>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";

import CurveDelimiter from "src/components/CurveDelimiter.vue";
import About from "pages/home/About.vue";

const components = [About];

export default defineComponent({
  components: { CurveDelimiter },

  setup() {
    return {
      components,
    };
  },
});
</script>
