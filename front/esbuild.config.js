const esbuild = require("esbuild");

esbuild.build({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  outdir: "public",
  splitting: true,
  minify: true,
  sourcemap: false,
  format: "esm",
  inject: ["react-shim.js"],
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".svg": "file",
    ".gif": "file",
  },
  assetNames: "[dir]/[name]",
});
