import { Router } from "express";

import CarController from "@controllers/cab";

const carRouter = Router();

carRouter.get("/cabs", CarController.getAvailableCabs);

export default carRouter;
