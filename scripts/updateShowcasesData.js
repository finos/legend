import { buildShowcaseRegistryData } from "@finos/legend-server-showcase-deployment/builder";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, existsSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../website/static/showcases");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

const startTime = Date.now();
console.log(`Building showcase registry data...`);

const data = buildShowcaseRegistryData(resolve(__dirname, "../showcases/data"));
writeFileSync(resolve(outputDir, "data.json"), JSON.stringify(data));

const hasChanged = Boolean(
  execSync("git status --porcelain", { encoding: "utf-8" }).trim()
);

console.log(
  `Finished building showcase registry data in ${Date.now() - startTime}ms!`
);
