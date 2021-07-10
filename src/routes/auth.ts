import { Router } from "express";

import { validator } from "@middlewares/auth";
import AuthController from "@controllers/auth";

const authRouter = Router();

authRouter.post("/signup", validator, AuthController.signup);
authRouter.post("/signin", validator, AuthController.signin);

export default authRouter;
