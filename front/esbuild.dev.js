const esbuild = require("esbuild");

esbuild
  .serve(
    { port: 7000, host: "0.0.0.0", servedir: "public" },
    {
      bundle: true,
      entryPoints: ["src/index.tsx"],
      outdir: "public/build",
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
      assetNames: "build/assets/[name]",
    }
  )
  .then((result) => {
    console.log("watching...");
  });
