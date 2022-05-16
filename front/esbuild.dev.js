const esbuild = require("esbuild");

esbuild
  .build({
    bundle: true,
    entryPoints: ["src/index.tsx"],
    outdir: "dist",
    splitting: true,
    minify: false,
    sourcemap: true,
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
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else console.log("watch build succeeded:", result);
      },
    },
  })
  .then((result) => {
    console.log("watching...");
  });
