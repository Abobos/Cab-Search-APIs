import { Router } from "express";

import { validator } from "@middlewares/auth";
import AuthController from "@controllers/auth";

const driverRouter = Router();

driverRouter.post("/drivers", validator, AuthController.signup);

export default driverRouter;
