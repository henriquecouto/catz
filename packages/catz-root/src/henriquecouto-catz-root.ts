import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@henriquecouto/catz-header",
  app: () => System.import("@henriquecouto/catz-header"),
  activeWhen: () => true,
});

registerApplication({
  name: "@henriquecouto/catz-viewer",
  app: () => System.import("@henriquecouto/catz-viewer"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
