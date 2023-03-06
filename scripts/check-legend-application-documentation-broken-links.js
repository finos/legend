const fs = require("fs");

const DOC_WEBSITE_URL = "https://legend.finos.org/";
const APPLICATION_DOC_DIRECTORY =
  "website/static/resource/studio/documentation/";
const WEBSITE_CONTENT_DIRECTORY = "./website/build/";

var files = fs.readdirSync(APPLICATION_DOC_DIRECTORY);
var brokenUrls = [];

for (let i = 0; i < files.length; i++) {
  if (!files[i].endsWith(".json")) continue;
  var jsonObject = JSON.parse(
    fs.readFileSync(APPLICATION_DOC_DIRECTORY + files[i], "utf8")
  );

  const keys = Object.keys(jsonObject.entries);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (jsonObject.entries[key].url == undefined) {
      continue;
    }
    lookForUrl(jsonObject.entries[key].url);
  }
}

if (brokenUrls.length !== 0) {
  throw new Error("Broken link(s) found: " + brokenUrls);
}

async function lookForUrlWithAnchor(url) {
  const locationOfFile = url
    .substring(0, url.lastIndexOf("/"))
    .replace(DOC_WEBSITE_URL, "");

  const filePathName =
    WEBSITE_CONTENT_DIRECTORY +
    locationOfFile +
    url.substring(url.lastIndexOf("/"), url.lastIndexOf("#")) +
    ".html";

  const anchorTag = url.substring(url.lastIndexOf("#"));

  if (await fs.existsSync(filePathName)) {
    await fs.readFile(filePathName, "UTF-8", (err, data) => {
      if (!data) {
        collectionOfErrors.push(["\n" + filePathName + "\n"]);
      }

      if (!data.toLocaleLowerCase().includes(anchorTag)) {
        brokenUrls.push(["\n" + url + "\n"]);
        throw new Error("Broken link(s) found: " + brokenUrls);
      }
    });
  } else {
    brokenUrls.push(["\n" + url + "\n"]);
  }
}

async function lookForUrl(url) {
  currUrl = url.replace(DOC_WEBSITE_URL, "");
  lastDirectoryIndex = currUrl.lastIndexOf("/");

  fileName = currUrl.substring(lastDirectoryIndex);
  currUrlFinal = currUrl.substring(0, lastDirectoryIndex);

  if (fs.existsSync(WEBSITE_CONTENT_DIRECTORY + currUrlFinal)) {
    if (fileName.lastIndexOf("#") !== -1) {
      //includes markdown tag
      lookForUrlWithAnchor(url);
    } else {
      if (!fs.existsSync(currUrlFinal + fileName + ".md")) {
        brokenUrls.push(["\n" + url + "\n"]);
      }
    }
  } else {
    brokenUrls.push(["\n" + url + "\n"]);
  }

  return;
}
