import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "personal-portfolio";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : `/${repositoryName}/`,
}));
