import { Request, Response, NextFunction } from "express";

import { sendSuccessResponse } from "@modules/sendResponse";

class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      return sendSuccessResponse(res, 201, "happy");
    } catch (err) {
      return next(err);
    }
  }

  static async signin(req: Request, res: Response, next: NextFunction) {
    try {
      return sendSuccessResponse(res, 201, "something");
    } catch (err) {
      return next(err);
    }
  }
}

export default AuthController;
