/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/questionnaire/",
  resolve: {
    alias: {},
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.ts"],
  },
});
