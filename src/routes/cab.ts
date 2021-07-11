import { Router } from "express";

import CabController from "@controllers/cab";

import { validateCabDetails } from "@middlewares/validate";
const carRouter = Router();

carRouter.get("/cabs", validateCabDetails, CabController.getAvailableCabs);

export default carRouter;
