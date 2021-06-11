const React = require("react");
const path = require("path");
const fs = require("fs");

// NOTE: since the page will be built and stored at `node_modules/docusaurus/lib/pages`, we need to add `../../../`
// to the intended path.
const getPath = (relPath) => path.resolve(__dirname, `../../../../${relPath}`);

/**
 * NOTE: due to the limitation of Docusaurus@1.x, we cannot really natively create page in React and
 * link it back with the main doc, this will be an isolated page, which doesn't have the benefits like
 * generated header and sidebar of other pages auto-generated from Markdown.
 */
function Releases(props) {
  const releases = fs
    .readdirSync(getPath("../../releases"))
    .map((dir) => {
      const fullDir = getPath(`../../releases/${dir}`);
      if (!fs.lstatSync(fullDir).isDirectory()) {
        return undefined;
      }
      return require(`${fullDir}/manifest.json`);
    })
    .filter(Boolean);
  return (
    <div className="docMainWrapper wrapper">
      <div style={{ marginTop: "7rem" }}>
        <header>
          <h1>Releases</h1>
        </header>
        <p>
          In the following table, we keep track of the details of each Legend
          release, which includes the changelog as well as the combination of
          versions for Studio, Engine and SDLC Docker images that are meant to
          work together
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0 10rem 0",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>
                  <a href="https://hub.docker.com/r/finos/legend-studio">
                    Legend Studio
                  </a>
                </th>
                <th>
                  <a href="https://hub.docker.com/r/finos/legend-engine-server">
                    Legend Engine
                  </a>
                </th>
                <th>
                  <a href="https://hub.docker.com/r/finos/legend-sdlc-server">
                    Legend SDLC
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {releases
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((release) => (
                  <tr key={release.version}>
                    <td>{release.version}</td>
                    <td>
                      finos/legend-studio:
                      {release.core["finos/legend-studio"]}
                    </td>
                    <td>
                      finos/legend-engine-server:
                      {release.core["finos/legend-engine-server"]}
                    </td>
                    <td>
                      finos/legend-sdlc-server:
                      {release.core["finos/legend-sdlc-server"]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

module.exports = Releases;
