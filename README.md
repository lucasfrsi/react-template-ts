<h1 align="center">
  React Template
  <br>
  <sup>
    <sub>
      <i>
        for scalable and performance focused projects
      </i>
    </sub>
  </sup>
</h1>

<p align="center">
  <img 
    src="https://i.imgur.com/HXeDbMl.png"
    alt="react-logo"
    width="120px"
    height="120px"
  />
  <br>
  <i>
    Crafted for highly scalable & performant and easily maintainable React.js applications
    <br>
    with a focus on best DX and best practices.
  </i>
  <br>
</p>

<p align="center">
  <a href="">
    <strong>https://github.com/lucasfrsi/react-template-ts</strong>
  </a>
  <br>
</p>

<p align="center">
  <a href="docs/DEVELOPER.md">
    Developer's Guide
  </a>
  &nbsp;·&nbsp;
  <a href="https://github.com/lucasfrsi/react-template-ts/pulls">
    Create a Pull Request
  </a>
  &nbsp;·&nbsp;
  <a href="https://github.com/lucasfrsi/react-template-ts/issues">
    Submit an Issue
  </a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/facebook/react">
    <img
      src="https://badges.aleen42.com/src/react.svg"
      alt="react"
    />
  </a>
  <br>
  <a href="https://github.com/webpack/webpack">
    <img
      src="https://img.shields.io/badge/bundler-Webpack-8DD6F9?logo=webpack"
      alt="bundler-webpack"
    />
  </a>
  &nbsp;
  <a href="https://github.com/babel/babel">
    <img
      src="https://img.shields.io/badge/compiler-Babel-F9DC3E?logo=babel"
      alt="compiler-babel"
    />
  </a>
  <br>
  <br>
  <a href="https://www.docker.com/">
    <img
      src="https://img.shields.io/badge/docker-Ready-2496ED?logo=docker"
      alt="docker-ready"
    />
  </a>
  &nbsp;
  <a href="https://github.com/airbnb/javascript">
    <img
      src="https://img.shields.io/badge/eslint-Airbnb-FF5A5F?logo=airbnb"
      alt="eslint-airbnb"
    />
  </a>
  &nbsp;
  <a href="https://github.com/typicode/husky">
    <img
      src="https://img.shields.io/badge/pre--commit-Husky-FAB040?logo=pre-commit"
      alt="pre-commit-husky"
    />
  </a>
  &nbsp;
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/types-TypeScript-3178C6?logo=TypeScript"
      alt="types-typescript"
    />
  </a>
  <!-- &nbsp;
  <a href="https://github.com/semantic-release/semantic-release">
    <img
      src="https://img.shields.io/badge/semantic-Release-green.svg?logo=semantic-release"
      alt="semantic-release"
    />
  </a>
  &nbsp;
  <a href="https://semver.org/">
    <img
      src="https://img.shields.io/badge/versioning-SemVer-3f4551.svg?logo=semver"
      alt="versioning-semver"
    />
  </a> -->
  <br>
  <br>
</p>

<hr>

## Features

### Predictable state management

Build easy to test and debug, flexible and extensible applications using Redux. Unidirectional data flow allows for change logging and time travel debugging. Install the Redux Dev Tools to see how your application's state changes and travel in time to debug.

**Packages**: _[@reduxjs/toolkit] ([redux], [immer] & [reselect]), [react-redux], [redux-saga] and [redux-logger]._

### HTTP requests

Axios allows us to have good defaults to work with JSON data, do more with less code and have better error handling.

**Package:** _[axios]._

### Instant feedback

Enjoy the best DX (Developer eXperience). Your saved changes to TS, JS or translation files are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code.

**Packages:** _[webpack] ([HMR]) and [react-refresh]._

### Next generation CSS

Write composable CSS that’s co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance. Generate application-wide styles and themes for your components.

**Package:** _[styled-components]._

### Industry-standard routing

Add pages to your application with the best routing library for React, React Router!

Also, React Router v6 is here! Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions — and its sister project, Reach Router — in their smallest and most powerful package yet.

**Package:** _[react-router-dom]._

### Industry-standard i18n internationalization support

Scalable apps need to support multiple languages, and i18next goes beyond just that, providing features such as plurals, context, interpolation and format. It provides a complete solution to localize products from web to mobile and desktop.

**Packages:** _[i18next] and [react-i18next]._

<!-- ### Quick scaffolding

Automate the creation of components and Redux slices - and their tests - right from the CLI.

**Packages:** _[plop] and [inquirer-directory]._ -->

### Static code analysis

Focus on writing new features without worrying about code quality or formatting. With the right editor setup, your code will automatically be formatted and linted as you work.

**Packages:** _[eslint] ([Airbnb]) and [prettier]._

### SEO

Supports SEO (document head tags management) for search engines that support indexing of JavaScript content (e.g., Google).

**Package:** _[react-helmet-async]._

### Testing

Develop your application with confidence. Write maintainable tests that only break when your app breaks, not implementation details.
Test your project with focus on simplicity and good testing practices.

**Packages:** _[jest] and [react-testing-library]._

### Pre-commit hooks

Move fast, and again, with confidence. The idea is to fail as early as possible, so no time is wasted on the CI.

Every time you `git commit` you'll be prompted to fill out the required commit fields, your commit message will then be linted and the commited files linted, formatted and tested.

**Packages:** _[husky], [commitizen], [commitlint] and [lint-staged]._

### Bundle analysis

Visualize the size and content of all your webpack output bundles with an interactive zoomable treemap, so you're able to optimize them if needed.

**Package:** _[webpack-bundle-analyzer]._

### Ready for fully automated releases

The entire release process can be automated, including: determining the next version number and generating the release notes and changelog, strictly following the Semantic Versioning specification and communicating the impact of changes to users.

This process works based on the commit messages format that, in turn, follows the Conventional Commits specification.

**Package:** _[conventional-commits]._

**Packages that are not included:** _[semantic-release] and [conventional-changelog-conventionalcommits]._

## Folder structure

### `.github`

Basic GitHub Actions **workflows** for merges and pull requests are in here, along a **dependabot** configuration file and a **PR template**.

### `.husky`

Here you find the git hooks used by the **husky** package.

### `.vscode`

A **settings.json** file containing _i18n_ extension configuration and setting _prettier_ as the default formatter. The **extensions.json** file contains recommended extensions to use when working with this project.

### `config`

The config folder holds files needed to set up the environment or the project. As of the time of writing it only contains an `nginx.conf` file used by Docker when building the production image to serve the application. If you intend to use `.env` files you can put them in here.

**Note:** _this project is not configured to load **.env** files, you need to do that yourself if you wish to use them._

### `docs`

All the documentation related to the project is located here, except for the main `README.md`.

### `scripts`

Shell scripts used by Docker and the Makefile are located in this folder.

### `src`

This is where you'll write your app, and spend most, if not all, of your time in. All the code that supports the app behind-the-scenes is located here, like: the Redux store, translations, styles & themes, etc.

#### `src/app`

This folder contains the assets, components, hooks and pages for the application.

#### `src/interfaces`

This folder holds all the global TS interfaces for the application.

#### `src/lib`

Internal modules or external packages are located here. (e.g., cloned libraries from the internet).

#### `src/locales`

Contains everything related to i18n, from translations to the package configuration itself.

#### `src/services`

This is meant to be used as a place to put all the Axios instances used by the application.

#### `src/store`

The Redux store configuration, root reducer and root saga are located here.

#### `src/styles`

Everything related to the styling of the application is here, like themes, global style and media queries.

#### `src/utils`

Utility bits and pieces live in here (e.g., small functions). These are usually used throughout the application or by code located in the `lib` folder.

## Development setup

Take some time to go through the [Developer's Guide](docs/DEVELOPER.md), there you'll find more information regarding how this project is set up and what you can do with it. The following sections are just a quick intro to get you started with the application and start developing.

### Prerequisites

- Install the [Node.js] LTS version, which includes [npm] (**[nvm]** is **strongly** recommended)
- Optional: [Docker]

### Setting up a project

Install the project dependencies:

```
npm ci
```

Run the application in development mode:

```
npm start
```

You can now access the application at http://localhost:8080/.

## To-Dos

- [x] Developer's Guide
- [ ] Update packages
- [x] Add tests
- [ ] Add [commitlint] to the CI
- [ ] Add [stylelint] (holding off until there's a proper way of configuring it without using deprecated packages)

## Contributing

Feel free to submit issues or create PRs, contributions are very welcome!

## Credits

This project was inspired by [react-boilerplate-cra-template].

## License

**react-template-ts** is [MIT] licensed.

[//]: # 'Reference Links'
[@reduxjs/toolkit]: https://github.com/reduxjs/redux-toolkit
[redux]: https://github.com/reduxjs/redux
[immer]: https://github.com/immerjs/immer
[reselect]: https://github.com/reduxjs/reselect
[react-redux]: https://github.com/reduxjs/react-redux
[redux-saga]: https://github.com/redux-saga/redux-saga
[redux-injectors]: https://github.com/react-boilerplate/redux-injectors
[redux-logger]: https://github.com/LogRocket/redux-logger
[webpack]: https://github.com/webpack/webpack
[hmr]: https://webpack.js.org/concepts/hot-module-replacement/
[react-refresh]: https://www.npmjs.com/package/react-refresh
[styled-components]: https://github.com/styled-components/styled-components
[react-router-dom]: https://github.com/remix-run/react-router/tree/main/packages/react-router-dom
[i18next]: https://github.com/i18next/i18next
[react-i18next]: https://github.com/i18next/react-i18next
[plop]: https://github.com/plopjs/plop
[inquirer-directory]: https://github.com/nicksrandall/inquirer-directory
[eslint]: https://github.com/eslint/eslint
[airbnb]: https://github.com/airbnb/javascript
[stylelint]: https://github.com/stylelint/stylelint
[prettier]: https://github.com/prettier/prettier
[react-helmet-async]: https://github.com/staylor/react-helmet-async
[jest]: https://github.com/facebook/jest
[react-testing-library]: https://github.com/testing-library/react-testing-library
[husky]: https://github.com/typicode/husky
[commitizen]: https://github.com/commitizen/cz-cli
[commitlint]: https://github.com/conventional-changelog/commitlint
[lint-staged]: https://github.com/okonet/lint-staged
[semantic-release]: https://github.com/semantic-release/semantic-release
[conventional-changelog-conventionalcommits]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[axios]: https://github.com/axios/axios
[webpack-bundle-analyzer]: https://github.com/webpack-contrib/webpack-bundle-analyzer
[node.js]: https://nodejs.org/en/
[npm]: https://docs.npmjs.com/
[nvm]: https://github.com/nvm-sh/nvm
[docker]: https://docs.docker.com/get-docker/
[release notes]: https://github.com/lucasfrsi/react-template-ts/releases
[react-boilerplate-cra-template]: https://github.com/react-boilerplate/react-boilerplate-cra-template
[mit]: https://github.com/lucasfrsi/react-template-ts/blob/main/LICENSE
