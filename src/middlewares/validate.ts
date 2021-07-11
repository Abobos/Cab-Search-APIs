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
  locationRegex,
  driverIdRegex,
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

export const validateLocationDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const locationData = magicTrimmer(req.body);

  const { driverId, latitude, longitude } = locationData;

  const validationSchema = {
    driverId: validateAgainstRegex(driverId, driverIdRegex, "driverId"),
    latitude: validateAgainstRegex(latitude, locationRegex, "latitude"),
    longitude: validateAgainstRegex(longitude, locationRegex, "longitude"),
  };

  const errors = errorChecker(validationSchema);

  if (errors) return sendErrorResponse(res, 422, errors);

  next();
};

export const validateCabDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const CabData = magicTrimmer(req.query);

  const { latitude, longitude } = CabData;

  const validationSchema = {
    latitude: validateAgainstRegex(latitude, locationRegex, "latitude"),
    longitude: validateAgainstRegex(longitude, locationRegex, "longitude"),
  };

  const errors = errorChecker(validationSchema);

  if (errors) return sendErrorResponse(res, 422, errors);

  next();
};
