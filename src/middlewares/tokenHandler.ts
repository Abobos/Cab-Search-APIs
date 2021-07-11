import { NextFunction, Request, Response } from "express";

import { verifyToken } from "@utils/tokenHandler";

import { UserData } from "../interfaces";
import { sendErrorResponse } from "@modules/sendResponse";

import DriverRepository from "@repositories/driver";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const noTokenErrorMsg = "Please provide a token";

    const token = req.params.token;
    if (!token) throw noTokenErrorMsg;

    const decoded = verifyToken(token) as UserData;

    req.user = decoded;

    const findColumn = "*";
    const findCondition = `id = ${req.user.id} AND email = '${req.user.email}'`;

    const driver = await DriverRepository.findOne(findColumn, findCondition);

    const userDoesNotExist = "Invalid authentication details";

    if (!driver) throw userDoesNotExist;

    return next();
  } catch (err) {
    const error = err.message ? "Authentication Failed" : err;

    sendErrorResponse(res, 401, error);
  }
};

export default auth;
