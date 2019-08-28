# template-service

Base template to build backend micro-services.

## Getting Started

The idea behind this project is show you the framework (template) previously created to build backend micro-services using a variety of technologies like node.js, nest.js, typescript, Docker, Kubernetes etc, by the way, the template is supported under different architectural design patterns like event-driven architecture, cqrs, mirroring data between others.

## Prerequisites

Before you start it's important that you have installed [node.js](https://nodejs.org/en/download/) > 8.x.x, [Docker](https://docs.docker.com/install/) > 2.1.0.0.


It's important that you download this [repository](https://github.com/thekerthin/kerthin-miscellaneous) and run in of it the following

```sh
$ lerna exec yarn link
```

Once you've run the above command inside of the `template-service` you run the following

```sh
$ yarn link @kerthin/cqrs
$ yarn link @kerthin/utils
```


## Scaffolding

```
src/
|-- application
|   |-- api
|   |   |-- controllers
|   |   |-- services
|   |   |-- dtos
|   |   |-- tests
|   |   |-- module.ts
|   |-- event-handler
|   |   |-- handlers
|   |   |-- dtos
|   |   |-- tests
|   |   |-- module.ts
|-- domain
|   |-- entities
|   |-- services
|   |-- tests
|   |-- module.ts
|-- infrastructure
|   |-- databases
|   |   |-- entities
|   |   |-- migrations
|   |   |-- repositories
|   |   |-- tests
|   |   |-- module.ts
|   ...
|...
```

**note:** No always is necessary to include the `event-handler` into `application` folder is only when your service awaits for external events

## Commands

Some commands become in part of your daily runtime such as

```sh
$ yarn docker-compose # setup docker services which are dependencies in the service
$ yarn start-dev # setup the service in development mode

$ yarn build # generate the transpile code ready to production
$ yarn start-prod # once the build command is executed this command can be executed

$ yarn test # execute test
$ yarn test-coverage # execute test coverage
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
