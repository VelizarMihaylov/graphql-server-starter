# AAG GraphQL Server

GraphQL server for the **AAG HUB** web app.

# Table of Contents

1. [Installation](#installation)
2. [Available Scripts](#available-scripts)
3. [File Structure](#file-structure)
4. [Code Format](#code-format)
5. [Testing](#testing)
6. [Usage With Docker](#usage-with-docker)

#

## Installation

In the project root folder do:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:4445](http://localhost:4445) to view it in the browser.

The server uses nodemon in development mode and will auto restart every time you made changes.<br />

### `yarn test`

Launches the test runner.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

The project uses `TypeScript` and `ES6` features. To make get it production ready we need to compile the code to standard JavaScript. Running the `build` script will build the app for production and put the compiled files in to the `lib` folder.<br />
Your app is ready to be deployed!

### `yarn start:prod`

Will run the compiled app in production mode.

### `yarn lint`

Will use `esLint` to lint the files.

### `yarn precommit`

This script runs before committing new changes to the repository. It will run the tests, lint the files and build the project. If at any step the script fails the commit will be aborted.

## File Structure

The top level folders in the project are as follow:

- **lib** - production ready build
- **src** - source code for the App

The _src_ folder contains the following suborders:

### `/app`

This folder contains the Koa Js server.

### `/schema`

This folder is containing all the GraphQL schema `Types` and `Resolvers`.

### `/server`

This folder contains sets up the Apollo GraphQL server as well as the `data-providers` for the different backend API's.

## Code Format

The project uses [eslint](https://eslint.org/) to keep the formatting consistent. It also follows the [JavaScript Standard Style](https://standardjs.com/) rules. Auto formatting is achieved with `Prettier.js` and enabled trough the `.vscode` configuration.

## Testing

The project uses `Jest` as a test runner. It follows the suggested folder structure by the `Jest` team and next to each module you will find a `__tests__` folder with unit tests around it.

## Usage with Docker

There is a docker file in the root folder that you can use to build a `Docker Image` for the server. By default the docker image will be build using the development environments so if you want to build a production ready version you will need to provide the production vars during build time. For example:

```
docker build -t $IMAGE:$NEW_VERSION . --build-arg NODE_ENV=production

```

### Docker Compose

You can also run the server using docker-compose. In the root folder there is a `Makefile` that provides the following `make` commands:

### `make build`

Running this command will build and start the image in detached mode. You can access the `Graphql Playground` locally at [http://localhost:4445](http://localhost:4445)

### `make up`

Running this command will start the GraphQL container.

### `make down`

This will stop the container

### `make logs`

Get the logs from the docker image.

### `make clean`

This will stop the container and remove all the related images from the machine

### `make stop`

This will stop the container

### `make stop`

This will start the container

### `make restart`

This will restart the container
