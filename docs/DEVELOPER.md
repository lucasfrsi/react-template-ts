# Developer's Guide

This document will guide you on how to set up your development environment as well as how to work with this project and the packages it uses.

## Table of Contents

### General

- [Creating a repository from a template](#creating-a-repository-from-a-template)
- [Prerequisite software](#prerequisite-software)
- [Local development](#local-development)
- [Formatting and linting your code](#formatting-and-linting-your-code)
- [Running tests](#running-tests)
- [Committing your changes](#committing-your-changes)
- [Building your application](#building-your-application)

### Packages

- [redux](#redux)
- [axios](#axios)
- [i18next](#i18next)
- [react-helmet-async](#react-helmet-async)
- [react-router-dom](#react-router-dom)
- [styled-components](#styled-components)
- [jest and testing-library](#jest-and-testing-library)

# General

## Creating a repository from a template

The best way to start with this project is to create your own repository using this one as a template. You can follow [this](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) article by GitHub on how to do that. Creating a repository from a template is similar to forking a repository, but there are important differences:

1. A new fork includes the entire commit history of the parent repository, while **a repository created from a template starts with a single commit**.
2. Commits to a fork don't appear in your contributions graph, while **commits to a repository created from a template do appear in your contribution graph**.
3. A fork can be a temporary way to contribute code to an existing project, while **creating a repository from a template starts a new project quickly**.

## Prerequisite Software

To get started you need to have [Node.js](https://nodejs.org/en/) or [Docker](https://www.docker.com/) installed on your machine (preferably both), as well as a code editor or IDE of your choice ([VSCode](https://code.visualstudio.com/) is highly recommended).

### `Node.js`

Check the **package.json** or **.nvmrc** file to see the Node.js version this project is currently using. It's highly recommended to use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to be able to handle different Node.js versions for different projects. If you have `nvm` installed, you can run the following commands in the root directory of the project to install and use the appropriate Node.js version:

```sh
# Install Node.js using the version specified in the '.nvmrc' file
nvm install

# Use the Node.js version specified in the '.nvmrc' file (in case you have more than one version installed and the project's one is not the default version for you)
nvm use
```

#### Installing the NPM modules

Once you have Node.js installed on your machine, you can install the NPM modules by running:

```sh
# Do a clean install of the project's dependencies
npm ci
```

This command is different from `npm install` because it will never write to **package.json** or any of the package-locks. That means installs are essentially frozen.

### `Docker` & `Docker Compose`

This project comes ready to be used with Docker, but I highly recommend having Node.js plus the NPM modules installed for local development, since it helps your code editor or IDE. Remember that if you use [Docker Desktop](https://www.docker.com/products/docker-desktop/), [Docker Compose](https://docs.docker.com/compose/install/) should already be installed on your machine, but if you're on a Linux machine you need to install it.

To run the development server within a container you can use the following command:

```sh
make bootstrap
```

You can also run `make` or `make help` at the root directory to see all others Makefile commands available.

### `Visual Studio Code`

This is not a must and you can definitely use other code editors or IDEs, but I highly recommend VSCode. It integrates really well with the packages this project currently uses (primarily if you're writing i18n projects, [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) is an amazing extension), it also integrates really well with [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) if you're on a Windows machine.

If you decide to go with VSCode as your code editor it will automatically show you the recommended extensions for this project based on the `.vscode/extensions.json` file.

## Local development

Run any of the commands below to start a development server locally:

```sh
# Uses 'webpack-dev-server' to start a development server that provides live reloading
npm start

# Does the same thing as above, but inside a Docker container
make bootstrap
```

You can access the development server at http://localhost:8080 using your preferred browser.

**Note:** you'll notice that, when you save a file, all the changes you've made will be reflected almost immediately in your browser, including translations.

## Formatting and linting your code

This project has both [Eslint](https://eslint.org/) (based on Airbnb [style guide](https://github.com/airbnb/javascript)) and [Prettier](https://prettier.io/) preconfigured. If you're using VSCode you can install the extensions for both to allow linting as you code as well as formatting on save. If you're using an IDE or a different code editor you might want to check their docs on how to integrate with Eslint and Prettier.

```sh
# Lint your code
npm run eslint

# Check the format of your code
npm run prettier

# You can run the commands above in Docker by using 'make'
make lint

# There's also a ':fix' counterpart that you can use
# It tries to fix things for you instead of just showing the errors
npm run eslint:fix
npm run prettier:fix
```

## Running tests

Tests in this project are written using [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/). You only need to set the desired coverage for your project in the **package.json** under "jest" and "coverageThreshold", that way the command exits with a non-zero status when you run Jest and the coverage is lower than you specified.

```sh
# Run Jest
npm test

# Run Jest in Watch Mode - rerun tests as you change your code
npm run test:watch

# Run tests in Docker using 'make' (it uses a CI variant)
make test
```

## Committing your changes

When you're done with your changes and want to commit them you can simply run a `git commit` and that'll automatically execute a few things for you, using git hooks, that in turn are configured via [husky](https://github.com/typicode/husky). Below you'll find a list of the hooks that are executed when you run `git commit`:

1. **pre-commit** hook, using [lint-staged](https://github.com/okonet/lint-staged)
   - Your TypeScript code will be cheked for errors
   - All files that are being committed will be linted, formatted and have related tests ran
2. **prepare-commit-msg**, using [commitizen](https://github.com/commitizen/cz-cli)
   - You'll be prompted to fill out any required commit fields, following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
3. **commit-msg**, using [commitlint](https://github.com/conventional-changelog/commitlint)
   - Checks if your commit message meets the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification format

It looks something like this:

```sh
$ git commit

# Checking for TS errors
> react-template-ts@1.0.0 check:ts
> tsc --noEmit

# Linting, formatting and running tests
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...
cz-cli@4.2.4, cz-conventional-changelog@3.3.0

# Prompt to fill out commit fields
? Select the type of change that you are committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)

# You might get an error from 'commitlint' depending on your choices and commit message, but it always try to fix things for you first.
```

All that is done for two reasons:

1. Fail fast, fail early:
   - If something's wrong with your code you'll able to fix that right away, instead of having the CI yell at you later
2. It allows you to automate the entire release process, all based on your commit messages:
   - Determine the next version number, strictly following [SemVer](https://semver.org/)
   - Generate release notes and changelog

**Note:** although the project is ready to have its release process automated, you'll have to configure that yourself, there's a variety of packages that can help you with that. You can start here though: [semantic-release](https://github.com/semantic-release/semantic-release).

## Building your application

### Create React App

CRA is a JavaScript build toolchain built and maintained by Facebook for bootstrapping React applications.

It's a comfortable environment for learning React and is the best way to start building a new single-page application in React. It's also very useful when creating examples for certain libraries or components.

#### **Pros**

- Easy and quick setup, primarily if this is your first time
- Good for learning React
- Only 'one' build dependency
- No configuration required — you don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.
- No lock-in — you can “eject” to a custom setup at any time.

#### **Cons**

- It's difficult to add custom configurations and it's kind of hard to configure after eject — since you have to eject the app to add custom configs, you also go against one of its advantages: having a single build dependency
- It encourages "blind" setup — usually people have no idea what they are installing at all, which can be an extremely dangerous habit as a developer. It's important to know how the setup works and how each piece of it plays together
- Depending on the libraries your application is going to use, CRA is a bloated solution — CRA comes with support for a lot of stuff out of the box, but not always you'll be using them, leading to extra dependencies that you will never use
- You are forced to use whatever dependencies CRA requires, including older and/or outdated libraries

### Custom setup

Is it worth using CRA? Let's be honest, it depends! CRA proves to be very useful, primarily when there's a need to get started quickly without worrying about configurations and project setup; however, setting up our own custom project from the ground up also has its benefits.

#### **Pros**

- A cleaner, easier to adapt and understand configuration
- We get to know exactly how a React project works behind the scenes
- We get to use only the libraries that we really need, thus leading to less time downloading packages and worrying about security vulnerabilities
- Being able to use the latest versions of libraries

#### **Cons**

- You need to maintain your setup yourself and that includes:
  - Keeping an eye on libraries vulnerabilities
  - Possibly having to manually change your configurations to adapt to major / breaking changes from libraries updates

#### **Bundling your code**

Since this project doesn't use CRA, it comes with [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) already preconfigured (check their configuration: [webpack.config.js](../webpack.config.js) and [.babelrc.js](../.babelrc.js), and also note how clean and easy to understand they are). To bundle your code and generate your build assets you can use the following command:

```sh
npm run build
```

That will take care of compiling your TypeScript code to JavaScript and then minifying and compressing it. It will also apply the necessary _polyfilling_ based on the "browserslist" in **package.json**.

You can find your build assets in the `./build` folder in the root of your project.

#### **Analyzing your bundled code**

You can visualize the size of your webpack output files with an interactive zoomable treemap provided by [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer):

```sh
npm run bundle:analyze
```

And then access it at `http://localhost:8888`.

That helps you:

1. Realize what's really inside your bundle
2. Find out what modules make up the most of its size
3. Find modules that got there by mistake
4. Optimize it!

#### **Serving your app for testing purposes**

Once you have your `./build` folder with your bundled code and build assets, you can serve it locally and test it:

```sh
# It uses 'npx serve' behind the scenes, passing the './build' folder to it
npm run serve

# You can also build and serve by running a single command
npm run start:prod
```

#### **Serving your app for testing purposes via Docker**

As with linting and testing, you can also serve your application using Docker.

```sh
# Spins a container to serve your application using 'Nginx'
make serve
```

If you need to build a Docker image for your application I recommend you to add the Docker commands to the Makefile, creating your own commands.

# Packages

## redux

The global state management in this project is handled by Redux and its ecosystem. You can find the store configuration in `./src/store/index.ts`. By default it adds `redux-logger` only in development. In this same folder you'll also find the **`rootReducer`** and **`rootSaga`**.

`./src/store/reducers.ts`

```typescript
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // import and add your reducers here
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
```

`./src/store/sagas.ts`

```typescript
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    // import and add your sagas here
  ]);
}
```

### @reduxjs/toolkit

This project actually uses Redux Toolkit for a standard way to write Redux logic. It's recommended that you structure your files using a "feature folder" approach (all files for a feature in the same folder). Within a given feature folder, the Redux logic for that feature should be written as a single "slice" file, preferably using the Redux Toolkit `createSlice` API.

Although that's strongly recommended, feel free to do things your way, as long as it works for you and/or your team. Here's how I structure my code:

```
├── ...
├── components
│   ├── mycomponent
│       ├── slice               # Folder containing all redux logic
│           ├── index.ts        # createSlice() + export reducer and actions
│           ├── sagas.ts        # sagas
│           ├── selectors.ts    # selectors
│           └── types.ts        # local types - for state, etc.
│       └── index.tsx
│   └── ...
└── ...
```

Read the `@reduxjs/toolkit` documentation [here](https://redux-toolkit.js.org/introduction/getting-started).

### react-redux

Normally you would import `useDispatch` and `useSelector` directly from the **react-redux** package, but since this project uses TypeScript, it's better to define typed hooks.

For `useDispatch` we actually extract the RootState type and dispatch type from the store. By doing that we infer the types according to our state slices. That's also useful for `useSelector`, since it saves us the need to type `(state: RootState)` every time. You can find their exports in `./src/app/hooks/redux.ts`.

```typescript
// Import them like this, and use them just like their normal counterpart
import { useAppDispatch, useAppSelector } from 'hooks';
```

Read the `react-redux` documentation [here](https://react-redux.js.org/introduction/getting-started).

### redux-saga

When you need to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) use Redux Saga, since it's easier to manage, more efficient to execute, easy to test, and better at handling failures.

Think of a saga as a separate thread in your application that's solely responsible for side effects. Redux Saga is a Redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

I highly recommend you to go to their documentation if you're not familiar with it and you should also know about ES6 generators, since Redux Saga uses it to make those asynchronous flows easy to read, write and test.

**Note:** the main difference between Redux Saga and Redux Thunk is that you don't end up in callback hell, you can test your asynchronous flows easily and your actions stay pure.

Read the `redux-saga` documentation [here](https://redux-saga.js.org/docs/introduction/GettingStarted).

## axios

Read the `axios` documentation [here](https://axios-http.com/docs/intro).

## i18next

### react-i18next

Read the `react-i18next` documentation [here](https://react.i18next.com/).

## react-helmet-async

Read about `react-helmet-async` [here](https://github.com/staylor/react-helmet-async).

## react-router-dom

Read the `react-router-dom` documentation [here](https://reactrouter.com/docs/en/v6).

## styled-components

Read the `styled-components` documentation [here](https://styled-components.com/docs).

## prop-types

Read the `prop-types` documentation [here](https://github.com/facebook/prop-types).

## jest and testing-library

Read the `jest` documentation [here](https://jestjs.io/docs/getting-started) and the `testing-library` [here](https://testing-library.com/docs/react-testing-library/intro).
