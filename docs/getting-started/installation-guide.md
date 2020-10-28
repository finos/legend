---
id: installation-guide
title: Installation guide
sidebar_label: Installation guide
---

The Legend platform has five components. The minimum required to run Legend are Engine, SDLC, and Studio. The five components are:

- **Engine**: Provides a Pure parser and compiler that executes plans when provided with a Pure function, a mapping, and a runtime. It's also an access point for model transformers written using the Legend language.
- **SDLC**: Provides a rich REST API letting users manage metadata. Most SDLCs are file and text-centric, but the Legend SDLC is model-centric, meaning users interact with model entities rather than with files and folders. The Legend SDLC enables:
    - Users to develop with tools designed for editing models (rather than files or code).
    - Users to view changes with tools designed for viewing model-level changes (rather than text changes).
    - Clients to create their own tools for their own use cases.
- **Studio**: Lets you describe and connect data in business terms to create data models.
- **Pure**: Lets you alter Pure, the underlying language for Legend.
- **Shared**: Provides shared code used across Legend apps for universal server-side functionality, like hosting static files, performing authentication, and so on.

## Prerequisites

- A GitLab.com account or your own GitLab server.
  - Create an *Application* by going to **profile settings > applications**.
- Java Development Kit (JDK) 8 or later.
- Maven 3.6 or later.

## Installation steps

1. Install **legend-engine**.

    1. Run `mvn install` to compile.
    2. To start the server, use the Main class `org.finos.legend.engine.server.Server` with the parameters: `server legend-engine-server/src/test/resources/org/finos/legend/engine/server/test/userTestConfig.json`.
    3. Test by going to http://127.0.0.1:9090 in a browser. The Swagger page can be accessed at http://127.0.0.1:9090/api/swagger.

2. Install **legend-sdlc**.

    1. Run `mvn install` to compile.
    2. Create a configuration file based on your particular environment. This can be JSON or YAML.

        A [sample configuration file](https://github.com/finos/legend-sdlc/blob/master/legend-sdlc-server/src/test/resources/config-sample.yaml) is included to help you get started. You need to supply some information, like the host your server is running on.

    3. On GitLab, create an *Application*, which is used for authorization so that the SDLC Server can act on behalf of users.

        For more information, see [GitLab's documentation](https://docs.gitlab.com/ee/api/oauth2.html). Include information about the GitLab instance and your app in the configuration file.

    4. To start the server, use the Main class `org.finos.legend.sdlc.server.Server` with the parameters: `server legend-sdlc-server/src/test/resources/org/finos/legend/sdlc/server/test/userTestConfig.json`.
    5. Test by going to these URLS in a browser:
        - http://127.0.0.1:7075/api/info — the page should return information, like the start time.
        - http://127.0.0.1:7075/api/swagger — the Swagger page.
        - http://127.0.0.1:7075/api/projects — a list of projects, which may be empty.

3. Install **legend-studio**.

    1. To compile, run:

        ```bash
          npm install
          npm run setup
          npm start
        ```

    2. Custom DEV server config:

        Depending on your developer environment, you might have customizations for the dev server. For example, if your environment has a different host for `localhost` and that host requires special signed certficates and keys, you need to provide those in `server/https`. See sample below:

        ```jsonc
        {
          "host": "localhost",
          // NOTE: the path must be relative to `webpack.config.js`
          "key": "./dev/server/localhost.key.pem",
          "cert": "./dev/server/localhost.cert.pem",
          "ca": "./dev/server/ca.cert.pem"
        }
        ```

        The configs specified in this file will override those in `webpack.config.js`. See `dev/scripts/start.js` and setting `SERVER_CONFIG_PATH` for more information.

    3. IDE: If you use VSCode, install `Prettier` and `ESLint` plugins, then configue your workspace settings in `./.vscode/settings.json` like this:

        ```jsonc
        {
          "editor.tabSize": 2,
          "eslint.validate": [
            "javascript",
            "javascriptreact",
            "typescript",
            "typescriptreact"
          ],
          "eslint.options": {
            // use advanced ESLint rules for development
            "configFile": "./.eslintrc-advanced.js",
            "rulePaths": ["./dev/eslint_rules"]
          },
          "search.exclude": {
            "**/node_modules": true,
            "**/package-lock.json": true
          },
          // This is useful when we want to use a different version of Typescript
          // "typescript.tsdk": "./node_modules/typescript/lib"
          "[css]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "[scss]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "[html]": {
            "editor.defaultFormatter": "vscode.html-language-features"
          },
          "[json]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "[jsonc]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
          },
          "[javascript]": {
            "editor.defaultFormatter": "vscode.typescript-language-features"
          },
          "[typescript]": {
            "editor.defaultFormatter": "vscode.typescript-language-features"
          },
          "[typescriptreact]": {
            "editor.defaultFormatter": "vscode.typescript-language-features"
          },
          "prettier.singleQuote": true,
          "prettier.trailingComma": "es5",
          "editor.formatOnSave": true,
          "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
          },
          "javascript.preferences.importModuleSpecifier": "non-relative",
          "typescript.preferences.importModuleSpecifier": "non-relative"
        }
        ```

        If succesful, your browser will open the local Studio.

4. (Optional) If you want to alter the fundamentals of the language or the server, install **legend-pure** and **legend-shared**. Run `mvn install` and recompile legend-pure and legend-shared after installation.

## More information

- [Legend roadmap](roadmap.md)
- [Contribute to Legend](contribute-to-legend.md)
- [Terms of service](terms-of-service.md)
