import { Router } from "express";

import { validator } from "@middlewares/validate";
import DriverController from "@controllers/driver";

const locationRouter = Router();

locationRouter.post("/location", validator, DriverController.register);

export default locationRouter;
