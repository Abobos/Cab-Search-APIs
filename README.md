# Cab-Search-APIs

Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

## Features

### Required Features

- User (admin) can register drivers
- User (driver) can save location
- User can get the nearest drivers

#### Tools

##### Dev Tools

- JAVASCRIPT(Node.js/Express.js)

- Docker

##### Testing Framework

- Mocha
- Chai
- Chai-HTTP

#### API Docs

- [Swagger](https://propertyprolite1.herokuapp.com/api-docs)

#### Getting Started

To setup Property Pro Lite, These tools should be installed in your PC

- [Node js](https://nodejs.org/en/download/)
- [Insonmia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/)
- [Git](https://git-scm.com/downloads)

#### Installing

- Clone this repo
- Open the
- Rename .env-sample to .env

  ##### N.B

  - Your JWT_KEY can be any string value e.g "secret",
  - Your CLOUDINARY_URL should be the URL specified in your cloudinary account. It contains your cloud_name, api_key, and api_secret.

* Open terminal
* Run `npm install`

### Running the app

- Run `npm run dev:start`

### Running the tests

- Run `npm test`

### Acknowledgments

- I learnt how to document my api [here](https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b)
