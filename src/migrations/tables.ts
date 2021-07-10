import db from "../config/pool";
import { logger } from "../utils/index";

const drivers = `
  DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE drivers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    phoneNumber VARCHAR(10) NOT NULL UNIQUE,
    licenseNumber VARCHAR(15) NOT NULL UNIQUE,
    carNumber VARCHAR(20) NOT NULL UNIQUE,
    isVerified BOOLEAN NOT NULL DEFAULT FALSE,
    registeredDate TIMESTAMP NOT NULL DEFAULT NOW()
  );`;

const locations = `
  DROP TABLE IF EXISTS products CASCADE;
  CREATE TABLE locations(
    id SERIAL PRIMARY KEY,
    driverId INT NOT NULL,
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    FOREIGN KEY (driverId) REFERENCES "drivers" (id) ON UPDATE CASCADE ON DELETE CASCADE
  );`;

(async function migrate() {
  try {
    await db.query(`${drivers} ${locations}`);

    logger.info("migration:database Table created");

    process.exit();
  } catch (err) {
    logger.error(`migration-error:database ${err.message}: Table not created`);

    process.exit(1);
  }
})();
