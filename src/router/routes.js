import apps from "src/constants/apps";

const appsPathProps = (route) => ({
  app: apps[route.params.app],
});

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
        name: "apps-app-launch",
        path: "apps/:app/launch",
        props: appsPathProps,
        component: () => import("pages/apps/LaunchApp.vue"),
      },
      {
        name: "apps-app-information",
        path: "apps/:app/:action?",
        props: (route) => ({
          ...appsPathProps(route),
          action: route.params.action,
        }),
        component: () => import("pages/apps/AppInformation.vue"),
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
