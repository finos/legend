import React from "react";
import Layout from "@theme/Layout";

export default function Releases(props) {
  const releasesData = props.releasesData;

  return (
    <Layout>
      <div className="docMainWrapper wrapper releases__wrapper">
        <div style={{ marginTop: "7rem" }}>
          <header>
            <h1> Releases</h1>
          </header>
          <p>
            In the following table, we keep track of the details of each Legend
            release, which includes the changelog as well as the combination of
            versions for Studio, Engine and SDLC Docker images that are meant to
            work together.
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {releasesData
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
                      <td style={{ width: "14rem" }}>
                        {Boolean(release.releaseNotesUrl) ? (
                          <center>
                            <a
                              href={release.releaseNotesUrl}
                              target="-blank"
                              rel="noopener noreferrer"
                            >
                              Release Notes
                            </a>
                          </center>
                        ) : null}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
