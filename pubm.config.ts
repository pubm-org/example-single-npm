import { defineConfig } from "@pubm/core";

export default defineConfig({
  packages: [{ path: ".", registries: ["npm"] }],
  branch: "main",
});
