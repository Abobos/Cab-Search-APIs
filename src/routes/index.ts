import { Router, Request, Response } from "express";

import driverRoute from "./driver";

import locationRoute from "./location";

import carRoute from "./cab";

import {
  sendSuccessResponseII,
  sendErrorResponse,
} from "@modules/sendResponse";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  sendSuccessResponseII(
    res,
    200,
    "Welcome to Cars Searh Application System API"
  )
);

router.use("/api/v1", [driverRoute, locationRoute, carRoute]);

router.all("*", (req: Request, res: Response) =>
  sendErrorResponse(res, 200, "This route is unavailable on the server")
);

export default router;
