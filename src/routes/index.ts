import { Router, Request, Response } from "express";

import driverRoute from "./location";
import locationRoute from "./location";
import carRoute from "./location";

import { sendSuccessResponse, sendErrorResponse } from "@modules/sendResponse";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  sendSuccessResponse(res, 200, {
    message: "Welcome to Property Pro Lite REST API",
  })
);

router.use("/api/v1 ", [driverRoute, locationRoute, carRoute]);

router.all("/*", (req: Request, res: Response) =>
  sendErrorResponse(res, 200, "This route is unavailable on the server")
);

export default router;