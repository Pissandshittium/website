import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "pissandshittium-worker",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-17",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      notFoundHandling: "none",
      runWorkerFirst: ["/_vinext/static-cache/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
      VINEXT_KV_CACHE: bindings.kv(),
    },
  }),
});
