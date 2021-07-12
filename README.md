# Cab-Search-APIs

Cab Search System Application Rest APIs is an api that allow users to get for available cars

## Features

### Required Features

- User can register drivers
- User can save location
- User can get the nearest available cars

#### Tools

##### Dev Tools

- TYPESCRIPT
- JAVASCRIPT(Node.js/Express.js)

##### Testing Framework

- Mocha
- Chai
- Chai-HTTP

#### API Docs

- [Swagger](https://car-search-apis.herokuapp.com//api-docs)

#### Getting Started

To setup Cabs Search System Application Rest API, These tools should be installed in your PC

- [Node js](https://nodejs.org/en/download/)
- [Insonmia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/)
- [Git](https://git-scm.com/downloads)

#### Installing

- Clone this repo
- Open the
- Rename .env-sample to .env

  ##### N.B

  - Your JWT_KEY can be any string value e.g "secret",
  - Your DATABASE_URL_DEV should be your connection string,
  - Your EMAIL should be your email for authenticating node mailer,
  - Your EMAIL_PASSWORD should be your password to the email for authenticating node mailer

* Open terminal
* Run `npm install` or `yarn install`

### Running the app

- Run `npm run start:dev` or `yarn start:dev`

### Running the tests

- Run `npm test-dev` or `yarn test-dev`
