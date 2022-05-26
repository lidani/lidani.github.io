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
  reumathuem: {
    hidden: true,
    id: "reumathuem",
    title: "Reumathuem",
  },
};
