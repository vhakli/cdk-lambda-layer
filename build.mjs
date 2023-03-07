import * as esbuild from "esbuild";
import * as url from "url";
import * as path from "path";

const arg = process.argv[2];

if (!arg) {
  throw new Error("No argument provided");
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const layerDir = path.join(__dirname, `./layers/${arg}`);

const layer = path.join(layerDir, `${arg}.ts`);
const outfile = path.join(
  layerDir,
  "dist/layer/nodejs/node_modules/@villehx",
  `${arg}.js`
);

await esbuild.build({
  platform: "node",
  target: "node18",
  bundle: true,
  entryPoints: [layer],
  outfile,
});
