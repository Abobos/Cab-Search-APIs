import db from "../config/pool";
// import { logger } from "../utils/index";

const drivers = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    phoneNumber VARCHAR(10) NOT NULL UNIQUE,
    licenseNumber VARCHAR(10) NOT NULL UNIQUE,
    carNumber VARCHAR(20) NOT NULL UNIQUE,
    registeredDate TIMESTAMP NOT NULL DEFAULT NOW(),
  );`;

const driversLocation = `
  DROP TABLE IF EXISTS products CASCADE;
  CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    driverId INT NOT NULL,
    latitude DECIMAL NOT NULL UNIQUE,
    longitude DECIMAL NOT NULL UNIQUE,
    FOREIGN KEY (driverId) REFERENCES "drivers" (id) ON UPDATE CASCADE ON DELETE CASCADE
  );`;

(async function migrate() {
  try {
    await db.query(`${drivers} ${driversLocation}`);
    console.log("migration:database Table created");
  } catch (e) {
    console.log({ e });
    console.log(`migration-error:database ${e}: Table not created`);
  }
})();
