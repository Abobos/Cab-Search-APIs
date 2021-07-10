import { Pool } from "pg";
import "dotenv/config";

import { envrionmentDetails } from "../interfaces";
// import { logger } from "../utils";
import { envDatabaseSettings } from "./db";

const env: string = process.env.NODE_ENV || "development";
const envConfig: envrionmentDetails = envDatabaseSettings(env);
const { envVariable } = envConfig;

const config = process.env[envVariable];
const pool = new Pool({ connectionString: config });

pool
  .connect()
  .then(() => {
    console.log(`connected to ${env} database`);
  })
  .catch((e: ErrorConstructor) => {
    console.log(`something went wrong when connecting to ${env} database`);
  });

export default pool;
