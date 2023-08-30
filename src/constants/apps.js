import { defineAsyncComponent } from "vue";

const TerehJuliana = {
  id: "tereh-juliana",
  title: "Tereh Juliana",
  ios: "terehjuliana",
  applestore:
    "https://apps.apple.com/br/app/tereh-juliana/id1455427442?platform=iphone",
  android: "com.terehjuliana.android",
  actions: {
    privacy: defineAsyncComponent(() =>
      import("src/privacy-policy/TerehJuliana.vue")
    ),
  },
};

const PlacaFipe = {
  id: "placa-fipe",
  title: "Placa Fipe",
  hasExternalPrivacy: true,
  android: "br.com.placafipe",
  ios: "placafipe",
  applestore:
    "https://apps.apple.com/br/app/placa-tabela/id6459104846?platform=iphone",
  actions: {
    privacy: "https://placafipe.com.br/politica-de-privacidade/pt-br",
  },
};

const PlacaTabela = {
  hidden: true,
  id: "placa-tabela",
  title: "Placa Tabela",
  ios: "placatabela",
  applestore: PlacaFipe.applestore,
  actions: {
    privacy: defineAsyncComponent(() =>
      import("src/privacy-policy/PlacaTabela.vue")
    ),
  },
};

export default {
  "tereh-juliana": TerehJuliana,
  "placa-fipe": PlacaFipe,
  "placa-tabela": PlacaTabela,
  reumathuem: {
    hidden: true,
    id: "reumathuem",
    title: "Reumathuem",
  },
};
