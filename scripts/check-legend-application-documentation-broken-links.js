const fs = require("fs");
const http = require("http");
const { parse } = require("url");

const DOC_WEBSITE_URL = "https://legend.finos.org/";
const APPLICATION_DOC_DIRECTORY =
  "../website/static/resource/studio/documentation/";
const WEBSITE_CONTENT_DIRECTORY = "../website/build/";

const files = fs.readdirSync(APPLICATION_DOC_DIRECTORY);
const BROKEN_LINKS = [];

const https = require("https");

files.forEach((file) => {
  const fileContent = JSON.parse(
    fs.readFileSync(APPLICATION_DOC_DIRECTORY + file, "utf8")
  );

  Object.values(fileContent.entries)
    .filter((entry) => entry.url)
    .forEach((entry) => validateURL(entry.url));
});

if (BROKEN_LINKS.length !== 0) {
  throw new Error(
    `Found ${BROKEN_LINKS.length} broken link(s):\n${BROKEN_LINKS.join("\n")}`
  );
}

function validateURL(url) {
  if (!url.startsWith(DOC_WEBSITE_URL)) {
    if (!url.startsWith("https://")) {
      return;
    }
    function urlExists(url) {
      return new Promise((resolve) => {
        const options = {
          method: "HEAD",
          host: parse(url).host,
          path: parse(url).pathname,
          port: 80,
        };

        const req = http.request(options, (res) => {
          resolve(res.statusCode < 400 || res.statusCode >= 500);
        });

        req.end();
      });
    }

    urlExists(url).then(() => {
      if (url.lastIndexOf("#") !== -1) {
        https.get(url, (res) => {
          let rawHtml = "";
          res.on("data", (chunk) => {
            rawHtml += chunk;
          });
          res.on("end", () => {
            try {
              if (!rawHtml.includes(url.substring(url.lastIndexOf("#") + 1))) {
                throw new Error(
                  "Broken link found for " +
                    url +
                    " (anchor " +
                    url.substring(url.lastIndexOf("#")) +
                    " does not exist)"
                );
              }
            } catch (e) {
              console.error(e.message);
            }
          });
        });
      }
    });

    return;
  }

  const relativeUrl = url.substring(DOC_WEBSITE_URL.length);

  const filePath =
    relativeUrl.lastIndexOf("#") !== -1
      ? `${
          WEBSITE_CONTENT_DIRECTORY +
          relativeUrl.substring(0, relativeUrl.lastIndexOf("#"))
        }.html`
      : `${WEBSITE_CONTENT_DIRECTORY + relativeUrl}.html`;

  const anchorTag =
    relativeUrl.lastIndexOf("#") !== -1
      ? relativeUrl.substring(relativeUrl.lastIndexOf("#"))
      : undefined;

  if (fs.existsSync(filePath)) {
    if (anchorTag) {
      fs.readFile(filePath, "UTF-8", (err, data) => {
        if (err || (data && !data.toLocaleLowerCase().includes(anchorTag))) {
          BROKEN_LINKS.push(url);
          throw new Error(
            "Broken link found for " +
              url +
              " (anchor " +
              anchorTag +
              " does not exist)"
          );
        }
      });
    }
  } else {
    BROKEN_LINKS.push(url);
  }
}
