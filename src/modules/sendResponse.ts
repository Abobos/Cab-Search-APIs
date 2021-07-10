import { Response } from "express";

export const sendErrorResponse = (
  res: Response,
  code: number,
  errorMessage: any
) =>
  res.status(code).send({
    status: "error",
    error: errorMessage
  });

export const sendSuccessResponse = (res: Response, code: number, data: any) =>
  res.status(code).send({
    status: "success",
    data
  });
