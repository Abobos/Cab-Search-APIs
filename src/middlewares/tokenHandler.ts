import { NextFunction, Request, Response } from "express";

import { verifyToken } from "@utils/tokenHandler";

import { RequestWithUser, UserData } from "../interfaces";

const auth = (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const token = req.params.token;

    const decoded = verifyToken(token) as UserData;

    req.user = decoded;

    return next();
  } catch (e) {
    return res.status(401).json({
      status: "fail",
      error: "Authentification failed",
    });
  }
};

export default auth;
