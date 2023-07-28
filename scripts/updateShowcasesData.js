import { buildShowcaseRegistryData } from "@finos/legend-server-showcase-deployment/builder";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, existsSync } from "fs";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../showcases/generated");

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

// NOTE: ideally, we could make it so that each contributor of showcases can re-generate the index
// file and commit it as part of their change, but we decide to this like this to lower the entry barrier
// for contributors, i.e. they don't need to setup Node, follow instructions, etc. locally, they can just
// contribute directly on Github if they wish to and rely on the pipeline to catch their changes
if (hasChanged) {
  console.log(`Updating showcases index...`);
  execSync(`git add . && git commit -m "Update showcases index" && git push`, {
    encoding: "utf-8",
  });
}

console.log(
  `Finished building showcase registry data in ${Date.now() - startTime}ms!`
);
