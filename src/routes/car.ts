import { Router } from "express";

import { validator } from "@middlewares/auth";

import AuthController from "@controllers/auth";

const carRouter = Router();

carRouter.get("/cars", validator, AuthController.signin);

export default carRouter;
