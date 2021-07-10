import express, { Application } from "express";

import indexRoute from "./routes";
import { defaultErrorHandler } from "@middlewares/error";

export class App {
  public app: Application;

  constructor(private port?: number) {
    this.app = express();
    this.settings();
    this.middlewares();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 8080);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(indexRoute);

    defaultErrorHandler(this.app);
  }

  getEnv() {
    return this.app.get("env");
  }

  getPort() {
    return this.app.get("port");
  }
}
