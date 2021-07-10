import { Router } from "express";

import { validator } from "@middlewares/validate";

import DriverController from "@controllers/driver";

const driverRouter = Router();

driverRouter.post("/drivers", validator, DriverController.register);
driverRouter.post("/drivers/:token/verify", DriverController.verify);

export default driverRouter;
