# Gr4vy Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Versioning

The `guides` directory serves as the 'next' version.  The label for this is set in docusaurus.config.js at:

```js
{
  ...
  versions: {
    current: {
      label: `Beta`,
    },
  }
  ...
}
```

To create a new version (from the guides directory) run:

```
npm run docusaurus docs:version 1.1.0-rc
```
this will create a copy of the guides directory in 'versioned_docs' and 'versioned_sidebars'.

The docusaurus.config.js also adds a new navbar item for the version dropdown 'docsVersionDropdown'.
