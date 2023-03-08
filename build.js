const esbuild = require("esbuild");
const path = require("path");

(async () => {
  const arg = process.argv[2];

  if (!arg) {
    throw new Error("No argument provided");
  }

  const layerDir = path.join(__dirname, `./layers/${arg}`);
  const layer = path.join(layerDir, `${arg}.ts`);
  const outfile = path.join(
    layerDir,
    "nodejs/node_modules/@villehx",
    `${arg}.js`
  );

  await esbuild.build({
    platform: "node",
    target: "node18",
    bundle: true,
    entryPoints: [layer],
    outfile,
  });
})();
