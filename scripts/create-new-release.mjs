import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import { createInterface } from "readline";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const RELEASES_DIR = resolve(__dirname, "../releases");
const OMNIBUS_ENV_FILE_PATH = resolve(__dirname, "../installers/omnibus/.env");
const OMNIBUS_ENV_FILE_CONTENT = readFileSync(OMNIBUS_ENV_FILE_PATH, "utf-8");

// ---------------------------- Default Values ----------------------------

const getVersion = (fileContent, token) => {
  const lines = fileContent.split("\n");
  for (const line of lines) {
    if (line.startsWith(`${token}=`)) {
      return line.substring(token.length + 1).trim();
    }
  }
  return undefined;
};
const currentEngineVersion = getVersion(
  OMNIBUS_ENV_FILE_CONTENT,
  "LEGEND_OMNIBUS_ENGINE_VERSION"
);
const currentSDLCVersion = getVersion(
  OMNIBUS_ENV_FILE_CONTENT,
  "LEGEND_OMNIBUS_SDLC_VERSION"
);
const currentStudioVersion = getVersion(
  OMNIBUS_ENV_FILE_CONTENT,
  "LEGEND_OMNIBUS_STUDIO_VERSION"
);
const today = new Date();
const DEFAULT_VERSION =
  today.toLocaleString("default", { year: "numeric" }) +
  "-" +
  today.toLocaleString("default", { month: "2-digit" }) +
  "-" +
  today.toLocaleString("default", { day: "2-digit" });

// ---------------------------- Inputs ----------------------------

const inquirer = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let releaseVersion = undefined;
let engineVersion = undefined;
let sdlcVersion = undefined;
let studioVersion = undefined;

await new Promise((resolve) => {
  inquirer.question(
    `What's the release version (optional - default to ${DEFAULT_VERSION})? `,
    (value) => {
      releaseVersion = value.trim() === "" ? DEFAULT_VERSION : value;
      resolve();
    }
  );
});

await new Promise((resolve) => {
  inquirer.question(
    `What's the Legend Engine version (optional)? `,
    (value) => {
      engineVersion = value.trim() === "" ? currentEngineVersion : value;
      resolve();
    }
  );
});

await new Promise((resolve) => {
  inquirer.question(`What's the Legend SDLC version (optional)? `, (value) => {
    sdlcVersion = value.trim() === "" ? currentSDLCVersion : value;
    resolve();
  });
});

await new Promise((resolve) => {
  inquirer.question(
    `What's the Legend Studio version (optional)? `,
    (value) => {
      studioVersion = value.trim() === "" ? currentStudioVersion : value;
      resolve();
    }
  );
});

inquirer.close();

if (existsSync(resolve(RELEASES_DIR, releaseVersion))) {
  console.log(`Release ${releaseVersion} already exists. Aborted.`);
  process.exit(0);
}

mkdirSync(resolve(RELEASES_DIR, releaseVersion));
writeFileSync(
  resolve(RELEASES_DIR, releaseVersion, "manifest.json"),
  JSON.stringify(
    {
      version: releaseVersion,
      timestamp: Date.now(),
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": studioVersion,
        "finos/legend-engine-server": engineVersion,
        "finos/legend-sdlc-server": sdlcVersion,
      },
    },
    null,
    2
  )
);

writeFileSync(
  OMNIBUS_ENV_FILE_PATH,
  OMNIBUS_ENV_FILE_CONTENT.split("\n")
    .map((line) => {
      if (line.startsWith(`LEGEND_OMNIBUS_IMAGE_VERSION=`)) {
        return `LEGEND_OMNIBUS_IMAGE_VERSION=${releaseVersion}`;
      } else if (line.startsWith(`LEGEND_OMNIBUS_ENGINE_VERSION=`)) {
        return `LEGEND_OMNIBUS_ENGINE_VERSION=${engineVersion}`;
      } else if (line.startsWith(`LEGEND_OMNIBUS_SDLC_VERSION=`)) {
        return `LEGEND_OMNIBUS_SDLC_VERSION=${sdlcVersion}`;
      } else if (line.startsWith(`LEGEND_OMNIBUS_PURE_IDE_IMAGE=`)) {
        return `LEGEND_OMNIBUS_PURE_IDE_IMAGE=${engineVersion}`; // use the same version as engine
      } else if (line.startsWith(`LEGEND_OMNIBUS_STUDIO_VERSION=`)) {
        return `LEGEND_OMNIBUS_STUDIO_VERSION=${studioVersion}`;
      }
      return line;
    })
    .join("\n")
);
