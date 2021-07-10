import { Router } from "express";

import { validator } from "@middlewares/validate";

import DriverController from "@controllers/driver";

const carRouter = Router();

carRouter.get("/cars", validator, DriverController.register);

export default carRouter;
