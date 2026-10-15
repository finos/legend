# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### User guides from Legend Studio

Some user guides are kept with their application's code, in [finos/legend-studio](https://github.com/finos/legend-studio)'s `docs/user-guide` folder: the Legend Cube guide, at `/cube`. The website's workflows check that folder out into `website/external/legend-studio` before they build, and the site is published daily so the guides follow Legend Studio's master. `docusaurus.config.js` lists the guides; one that isn't checked out is left out of the build.

To see them locally, check the folder out first:

```
$ git clone --depth 1 --filter=blob:none --sparse https://github.com/finos/legend-studio.git external/legend-studio
$ git -C external/legend-studio sparse-checkout set docs/user-guide
```

or copy a local `legend-studio/docs/user-guide` into `external/legend-studio/docs/` (a copy, not a link, so the pages build with this site's packages).
