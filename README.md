<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

# Deployment

## Local Development / Docker Image

This application can be tested from a Docker image, the same image that can be used to deploy to any Docker/Container Cloud service such as AWS Fargate / ECS, or as part of a Kubernetes distribution (Helm)

Locally, the persistence layer can be deployed as a docker container as well in tandem with the application using `docker compose`

## Docker image usage

**BUILD**
`docker build --tag nest-task-api-jp:<TAG> .`

**VERIFY_BUILD**
`docker images`

**RUN**
`docker run --publish 8080:80 nest-task-api-jp`

_Verify_ http://localhost:8080/api

