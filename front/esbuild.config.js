const esbuild = require("esbuild");

esbuild.build({
  bundle: true,
  entryPoints: ["src/index.tsx"],
  outdir: "public/build",
  entryNames: "[dir]/[name]",
  splitting: true,
  minify: true,
  format: "esm",
  inject: ["react-shim.js"],
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".jpeg": "file",
    ".svg": "file",
    ".gif": "file",
  },
  assetNames: "assets/[name]",
});
