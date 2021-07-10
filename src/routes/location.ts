import { Router } from "express";

import { validator } from "@middlewares/auth";
import AuthController from "@controllers/auth";

const locationRouter = Router();

locationRouter.post("/location", validator, AuthController.signin);

export default locationRouter;
