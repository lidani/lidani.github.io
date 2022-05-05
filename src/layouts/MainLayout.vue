<template>
  <q-layout view="hHh LpR fff">
    <q-header
      :elevated="goBackRoute != null"
      :style="`background-color: ${
        goBackRoute ? 'var(--q-primary)' : 'transparent'
      }`"
    >
      <q-toolbar elevated height="200px">
        <q-btn
          v-if="goBackRoute && goBackRoute.name"
          :to="goBackRoute"
          color="black"
          round
          flat
          icon="mdi-chevron-left"
        >
        </q-btn>
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

    <router-view />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import pick from "lodash/pick";

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

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      essentialLinks: linksList,
    };
  },
  computed: {
    goBackRoute() {
      const matched = this.$route.matched;
      const route = pick(matched[matched.length - 2], ["name"]);

      if (route && route.name === "main") {
        route.name = "home";
      }

      return this.$route.name === route.name ? null : route;
    },
  },
});
</script>
