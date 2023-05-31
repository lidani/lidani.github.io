import { defineAsyncComponent } from "vue";

export default {
  "tereh-juliana": {
    id: "tereh-juliana",
    title: "Tereh Juliana",
    ios: "terehjuliana",
    applestore: "1455427442",
    android: "com.terehjuliana.android",
    actions: {
      privacy: defineAsyncComponent(() =>
        import("src/privacy-policy/TerehJuliana.vue")
      ),
    },
  },
  "placa-fipe": {
    id: "placa-fipe",
    title: "Placa Fipe",
    hasExternalPrivacy: true,
    ios: "placafipe",
    applestore: "1663671875",
    android: "br.com.placafipe",
    actions: {
      privacy: "https://placafipe.com.br/politica-de-privacidade/pt-br",
    },
  },
  reumathuem: {
    hidden: true,
    id: "reumathuem",
    title: "Reumathuem",
  },
};
