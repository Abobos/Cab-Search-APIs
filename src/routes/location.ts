import { Router } from "express";

import LocationController from "@controllers/location";

import { validateLocationDetails } from "@middlewares/validate";
const locationRouter = Router();

locationRouter.post(
  "/locations",
  validateLocationDetails,
  LocationController.saveDriverLocation
);

export default locationRouter;
