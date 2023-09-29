export default {
  // why??
  // https://github.com/vitejs/vite/discussions/9332#discussioncomment-4387303
  base: "./",
  assetsInclude: ["**/*.obj", "**/*.mtl"],
  build: {
    outDir: "docs",
  },
};
