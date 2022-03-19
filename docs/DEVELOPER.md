# Developer's Guide

This document will guide you on how to set up your development environment as well as how to work with this project and the packages it uses.

- [Prerequisite software](#prerequisite-software)
- [Creating a repository from a template](#creating-a-repository-from-a-template)
- [Formatting and linting your code](#formatting-and-linting-your-code)
- [Running tests](#running-tests)
- [Committing your changes](#committing-your-changes)
- [Building your application](#building-your-application)

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

## Creating a repository from a template

The best way to start with this project is to create your own repository using this one as a template. You can follow [this](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) article by GitHub on how to do that. Creating a repository from a template is similar to forking a repository, but there are important differences:

1. A new fork includes the entire commit history of the parent repository, while **a repository created from a template starts with a single commit**.
2. Commits to a fork don't appear in your contributions graph, while **commits to a repository created from a template do appear in your contribution graph**.
3. A fork can be a temporary way to contribute code to an existing project, while **creating a repository from a template starts a new project quickly**.

## Formatting and linting your code

A better way is to set up your IDE to format the changed file on each file save.
You can check that your code is properly formatted and adheres to coding style by running:

```shell
$ yarn lint
```

## Running tests

a

## Committing your changes

b

## Building your application

c

### Building a Docker image

cc
