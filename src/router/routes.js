const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("pages/MainPage.vue"),
      },
      {
        name: "apps",
        path: "apps",
        component: () => import("layouts/AppsLayout.vue"),
        children: [
          {
            name: "apps-app-information",
            props: true,
            path: ":id/:action?",
            component: () => import("pages/AppInformation.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
    // component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
