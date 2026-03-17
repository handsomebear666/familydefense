import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 这里的仓库名必须和你在 GitHub 上的仓库名一致
  base: "/familydefense/",
});
