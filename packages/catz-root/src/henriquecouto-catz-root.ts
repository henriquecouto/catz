import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@henriquecouto/catz-header",
  app: () => System.import("@henriquecouto/catz-header"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
