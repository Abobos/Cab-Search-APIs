import { Router, Request, Response, response } from "express";

import https from "https";

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
    "Welcome to Cabs Searh Application System API"
  )
);

router.get(
  "/justeat",
  (req: Request, res: Response) => {
    console.log("I'm here");

    const https = require("https");

    https
      .get(
        "https://uk.api.just-eat.io/restaurants/bypostcode/ec4m",
        (resp: any) => {
          let data = "";

          // A chunk of data has been received.
          resp.on("data", (chunk: any) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            res.status(200).json({ status: "success", data: JSON.parse(data) });
          });
        }
      )
      .on("error", (err: any) => {
        console.log("Error: " + err.message);
        res
          .status(500)
          .json({ status: "fail", message: "Something went wrong" });
      });
  }

  // sendSuccessResponseII(
  //   res,
  //   200,
  //   "Welcome to Cabs Searh Application System API"
  // )
);

router.use("/api/v1", [driverRoute, locationRoute, carRoute]);

router.all("*", (req: Request, res: Response) =>
  sendErrorResponse(res, 404, "This route is unavailable on the server")
);

export default router;
