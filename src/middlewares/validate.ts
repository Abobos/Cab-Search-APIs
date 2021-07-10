import { Request, Response, NextFunction } from "express";

import {
  emailRegex,
  nameRegex,
  licenseNumberRegex,
  carNumberRegex,
  phoneNumberRegex,
  validateAgainstRegex,
  errorChecker,
  magicTrimmer,
} from "@modules/validator";
import { sendErrorResponse } from "@modules/sendResponse";

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const userData = magicTrimmer(req.body);

  const {
    name,
    email,
    license_number: licenseNumber,
    phone_number: phoneNumber,
    car_number: carNumber,
  } = userData;

  const validationSchema = {
    name: validateAgainstRegex(name, nameRegex, "name"),
    email: validateAgainstRegex(email, emailRegex, "email"),
    phone_number: validateAgainstRegex(
      phoneNumber,
      phoneNumberRegex,
      "phone_number"
    ),
    license_number: validateAgainstRegex(
      licenseNumber,
      licenseNumberRegex,
      "license_number"
    ),
    car_number: validateAgainstRegex(carNumber, carNumberRegex, "car_number"),
  };

  const errors = errorChecker(validationSchema);

  if (errors) return sendErrorResponse(res, 422, errors);

  next();
};

export default validator;
