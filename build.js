const esbuild = require("esbuild");
const path = require("path");

(async () => {
  const project = process.argv[2];

  if (!project) {
    throw new Error("No project name provided");
  }

  const layerDir = path.join(__dirname, `./packages/${project}`);
  const layer = path.join(layerDir, `${project}.ts`);
  const outfile = path.join(
    layerDir,
    "dist/nodejs/node_modules/@villehx",
    `${project}.js`
  );

  console.log(`building "${project}" layer`);
  await esbuild
    .build({
      platform: "node",
      target: "node18",
      bundle: true,
      entryPoints: [layer],
      outfile,
    })
    .then(() => {
      console.log("build complete");
    })
    .catch(() => {
      console.error("build failed");
    });
})();
