import React from "react";
import Layout from "@theme/Layout";

export default function Releases() {
  const releasesData = [
    {
      version: "2022-05-05",
      timestamp: 1651783722829,
      releaseNotesUrl:
        "https://legend.finos.org/docs/release/release-2022-05-05",
      core: {
        "finos/legend-studio": "5.0.0",
        "finos/legend-engine-server": "3.1.0",
        "finos/legend-sdlc-server": "0.75.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2022-04-26",
      timestamp: 1650993265059,
      releaseNotesUrl:
        "https://legend.finos.org/docs/release/release-2022-04-26",
      core: {
        "finos/legend-studio": "4.19.0",
        "finos/legend-engine-server": "3.0.0",
        "finos/legend-sdlc-server": "0.74.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },

    {
      version: "2021-10-18",
      timestamp: 1634599077493,
      releaseNotesUrl:
        "https://legend.finos.org/docs/release/release-2021-10-18",
      core: {
        "finos/legend-studio": "0.10.0",
        "finos/legend-engine-server": "2.48.0",
        "finos/legend-sdlc-server": "0.57.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-07-08",
      timestamp: 1625754648359,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.39",
        "finos/legend-engine-server": "2.34.0",
        "finos/legend-sdlc-server": "0.39.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-06-09",
      timestamp: 1623268599213,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.38",
        "finos/legend-engine-server": "2.32.0",
        "finos/legend-sdlc-server": "0.36.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-31",
      timestamp: 1617192000000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.16",
        "finos/legend-engine-server": "2.21.0",
        "finos/legend-sdlc-server": "0.24.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-26",
      timestamp: 1616760000000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.16",
        "finos/legend-engine-server": "2.20.0",
        "finos/legend-sdlc-server": "0.23.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-24",
      timestamp: 1616587200000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.15",
        "finos/legend-engine-server": "2.20.0",
        "finos/legend-sdlc-server": "0.23.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-22",
      timestamp: 1616414400000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.2.11",
        "finos/legend-engine-server": "2.20.0",
        "finos/legend-sdlc-server": "0.23.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-18",
      timestamp: 1616068800000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.20.0",
        "finos/legend-sdlc-server": "0.23.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-16",
      timestamp: 1615896000000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.18.0",
        "finos/legend-sdlc-server": "0.22.1",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-15",
      timestamp: 1615809600000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.18.0",
        "finos/legend-sdlc-server": "0.22.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-12",
      timestamp: 1615550400000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.18.0",
        "finos/legend-sdlc-server": "0.21.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-09",
      timestamp: 1615291200000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.17.0",
        "finos/legend-sdlc-server": "0.20.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-03-03",
      timestamp: 1614772800000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.16.0",
        "finos/legend-sdlc-server": "0.19.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-18",
      timestamp: 1613649600000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.14.0",
        "finos/legend-sdlc-server": "0.18.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-17",
      timestamp: 1613563200000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.13.0",
        "finos/legend-sdlc-server": "0.17.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-12",
      timestamp: 1613131200000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.12.0",
        "finos/legend-sdlc-server": "0.16.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-09",
      timestamp: 1612872000000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.11.0",
        "finos/legend-sdlc-server": "0.15.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-08",
      timestamp: 1612785600000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.1",
        "finos/legend-engine-server": "2.10.1",
        "finos/legend-sdlc-server": "0.14.1",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
    {
      version: "2021-02-03",
      timestamp: 1612353600000,
      releaseNotesUrl: "",
      core: {
        "finos/legend-studio": "0.1.0",
        "finos/legend-engine-server": "2.10.0",
        "finos/legend-sdlc-server": "0.14.0",
        "gitlab/gitlab-ce": "13.9.3-ce.0",
        mongo: "4.0",
      },
    },
  ];

  console.log("helol");

  console.log("this is releases", releasesData);
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
