# NodeJS API Boilerplate

## Requirements

To run this project you will need:

1. [NodeJS](https://nodejs.org/en/download/)
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Environment

- `.env` file is read when in production.
- `.env.dev` file is read when calling `yarn dev` (development environment).
- `.env.test` file is read when calling `yarn test` (test environment).

You can use `.env.sample` to know how to configure the `.env` to your needs.

`.env.sample` also contains the environment defaults.

## Scripts

- `yarn prisma migrate dev` to generate/sync database accordingly to migrations (or generate migration if `schema.prisma` was modified).
- `yarn dev` to run app in development environment.
- `yarn test` to run tests.
- `yarn prod` to build TypeScript to JavaScript then run app in production environment simulation.

## API Documentation

- `http://{host}:{port}/docs` default: <http://localhost:4000/docs>

## Main packages

- [TypeScript](https://github.com/microsoft/TypeScript)
- HTTP Server: [routing-controllers](https://github.com/typestack/routing-controllers) and [express](https://github.com/expressjs/express)
- Database: [prisma](https://github.com/prisma/prisma)
- Requests validations: [class-validator](https://github.com/typestack/class-validator)
- API documentation: [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- Tests: [jest](https://github.com/facebook/jest)
- Logs: [winston](https://github.com/winstonjs/winston)
