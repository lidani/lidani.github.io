<template>
  <q-layout view="hHh LpR fff">
    <q-header style="background-color: transparent">
      <q-toolbar height="200px">
        <q-space />

        <q-btn
          flat
          dense
          round
          v-for="(link, i) in essentialLinks"
          v-bind="link"
          :key="i"
        />
      </q-toolbar>
    </q-header>

    <main>
      <q-page-container class="bg-primary">
        <!-- <q-page class="bg-primary"> -->
        <div class="bg-primary">
          <q-banner class="bg-primary text-dark q-pa-xl">
            <div class="text-h2">Gustavo Lidani</div>
            <div class="text-h6">
              Fullstack Web Developer | iOS and Android Developer
            </div>
          </q-banner>

          <CurveDelimiter fill="var(--q-secondary)" />
        </div>
        <!-- </q-page> -->

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
        :class="`${
          components.length % 2 === 0 ? 'bg-secondary' : 'bg-primary'
        }`"
      >
        <q-space></q-space>
        <div class="text-caption">
          &copy;copyright {{ new Date().getFullYear() }}
        </div>
        <q-space></q-space>
      </q-banner>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import CurveDelimiter from "src/components/CurveDelimiter.vue";
import About from "src/pages/About.vue";
import About2 from "src/pages/About2.vue";
import About3 from "src/pages/About3.vue";

const linksList = [
  {
    title: "Twitter",
    ariaLabel: "Twitter",
    icon: "mdi-twitter",
    color: "twitter",
    caption: "twitter.com/gustavo_lidani",
    href: "https://twitter.com/gustavo_lidani",
    target: "_blank",
  },
  {
    title: "Linkedin",
    ariaLabel: "Linkedin",
    color: "linkedin",
    icon: "mdi-linkedin",
    caption: "linkedin.com/in/gustavolidani",
    href: "https://linkedin.com/in/gustavolidani",
    target: "_blank",
  },
  {
    title: "Github",
    ariaLabel: "Github",
    color: "github",
    caption: "github.com/lidani",
    icon: "mdi-github",
    href: "https://github.com/lidani",
    target: "_blank",
  },
];

const components = [About, About2, About3];

export default defineComponent({
  name: "MainLayout",
  components: { CurveDelimiter },

  setup() {
    return {
      essentialLinks: linksList,
      components,
    };
  },
});
</script>
