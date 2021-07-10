import { envrionmentDetails } from "../interfaces";

export const envDatabaseSettings = (env: string): envrionmentDetails => {
  let config = {
    envVariable: "",
    dialect: "postgres",
  };

  env === "development"
    ? (config.envVariable = "DATABASE_URL_DEV")
    : (config.envVariable = "DATABASE_URL_PROD");

  return config;
};
