import { extractShowcaseRegistryData } from "@finos/legend-server-showcase-deployment/builder";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../website/static/showcases");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

const startTime = Date.now();
console.log(`Building showcase registry data...`);

extractShowcaseRegistryData(
  resolve(__dirname, "../showcases/data"),
  resolve(outputDir, "data.json")
);

console.log(
  `Finished building showcase registry data in ${Date.now() - startTime}ms!`
);
