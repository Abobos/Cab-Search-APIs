import { Request, Response, NextFunction, Application } from "express";

import { InternalServerError } from "../exceptions";
import { logger } from "../utils";

export const defaultErrorHandler = (app: Application) =>
  app.use(
    (
      error: InternalServerError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const statusCode = error.statusCode || 500;

      process.env.NODE_ENV !== "production" &&
        statusCode === 500 &&
        logger.error(`${statusCode} ${error.message} \n ${error.stack}`);

      res.status(statusCode).send({
        status: "failure",
        error: statusCode === 500 ? "Internal Server Error" : error.message,
      });
    }
  );
