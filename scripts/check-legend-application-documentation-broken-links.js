import { readdirSync, readFileSync, existsSync } from "fs";
import { request } from "http";
import { get } from "https";
import { resolve as _resolve } from "path";
import { parse } from "url";

const DOC_WEBSITE_URL = "https://legend.finos.org/";
const APPLICATION_DOC_DIRECTORY = _resolve(
  __dirname,
  "../website/static/resource/studio/documentation/"
);
const WEBSITE_CONTENT_DIRECTORY = _resolve(__dirname, "../website/build/");

async function detectBrokenLinks() {
  const files = readdirSync(APPLICATION_DOC_DIRECTORY);

  const brokenLinks = (
    await Promise.all(
      files.flatMap((file) => {
        const fileContent = JSON.parse(
          readFileSync(_resolve(APPLICATION_DOC_DIRECTORY, file), "utf8")
        );

        return Object.values(fileContent.entries)
          .filter((entry) => entry.url)
          .map((entry) => checkLink(entry.url));
      })
    )
  ).filter(Boolean);

  if (brokenLinks.length !== 0) {
    throw new Error(
      `Found ${brokenLinks.length} broken link(s):\n${brokenLinks.join("\n")}`
    );
  } else {
    console.log(`No broken links found!`);
  }
}

// Use `HEAD` request via http to check if the url still exists
// See https://stackoverflow.com/questions/60841965/how-can-i-check-to-see-if-a-url-exists-or-not
// See https://github.com/nwaughachukwuma/url-exists-nodejs
async function checkExternalLinkExists(url) {
  return new Promise((resolve) => {
    const req = request(
      {
        method: "HEAD",
        host: parse(url).host,
        path: parse(url).pathname,
        port: 80,
      },
      (response) => {
        // NOTE: only 400 requests are considered not found
        resolve(response.statusCode < 400 || response.statusCode >= 500);
      }
    );

    req.end();
  });
}

async function fetchExternalLinkSiteData(url) {
  return new Promise((resolve, reject) => {
    get(url, (response) => {
      let chunks_of_data = [];
      response.on("data", (fragments) => {
        chunks_of_data.push(fragments);
      });
      response.on("end", () => {
        let response_body = Buffer.concat(chunks_of_data);
        resolve(response_body.toString());
      });
      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}

async function checkLink(url) {
  if (!url.startsWith(DOC_WEBSITE_URL)) {
    // we will not handle unsecured links
    if (!url.startsWith("https://")) {
      return undefined;
    }

    let result = undefined;
    const urlExists = await checkExternalLinkExists(url);
    if (urlExists) {
      await fetchExternalLinkSiteData(url)
        .then((data) => {
          if (
            url.lastIndexOf("#") !== -1 &&
            !data.includes(url.substring(url.lastIndexOf("#")))
          ) {
            result = url;
          }
        })
        .catch(() => {
          result = url;
        });
    } else {
      result = url;
    }
    return result;
  }

  const relativeUrl = url.substring(DOC_WEBSITE_URL.length);
  const anchorIdx = relativeUrl.lastIndexOf("#");
  const anchorTag =
    anchorIdx !== -1 ? relativeUrl.substring(anchorIdx) : undefined;
  const filePath =
    anchorIdx !== -1
      ? _resolve(
          WEBSITE_CONTENT_DIRECTORY,
          `${relativeUrl.substring(0, anchorIdx)}.html`
        )
      : _resolve(WEBSITE_CONTENT_DIRECTORY, `${relativeUrl}.html`);

  if (existsSync(filePath)) {
    if (anchorTag) {
      try {
        const data = readFileSync(filePath, {
          encoding: "utf-8",
        });
        if (data && !data.toLocaleLowerCase().includes(anchorTag)) {
          return url;
        }
      } catch {
        return url;
      }
    }
    return undefined;
  }
  return url;
}

detectBrokenLinks();
