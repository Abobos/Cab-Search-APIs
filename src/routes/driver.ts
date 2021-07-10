import { Router } from "express";

import { validator } from "@middlewares/validate";

import Auth from "@middlewares/tokenHandler";

import DriverController from "@controllers/driver";

const driverRouter = Router();

driverRouter.post("/drivers", validator, DriverController.register);
driverRouter.get("/drivers/:token/verify", Auth, DriverController.verify);

export default driverRouter;
