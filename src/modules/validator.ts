import { objectLiteral } from "../interfaces";

export const emailRegex: RegExp =
  /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export const nameRegex: RegExp = /^[A-Za-z]+\s([A-Za-z]+\s)?[A-Za-z]+$/;

export const licenseNumberRegex: RegExp =
  /^[A-Z]{3}[0-9]{5}[A-Z]{2}([0-9]{1})$/;

export const carNumberRegex: RegExp = /^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{4}$/;

export const phoneNumberRegex: RegExp = /[\d]{10}/;

export const locationRegex: RegExp = /^[0-9][\.\d]*(,\d+)?$/;

export const driverIdRegex: RegExp = /^[0-9]{1,}$/;

export const magicTrimmer = (payload: objectLiteral): objectLiteral => {
  const data = {};

  Object.keys(payload).forEach((key) => {
    const value: any = payload[key];
    Object.assign(data, {
      [key]: typeof value !== "string" ? value : value.trim(),
    });
  });

  return data;
};

export const validateAgainstRegex = (
  value: string,
  regex: RegExp,
  regexType: string
): any => {
  let errorMessage: string = "";

  console.log({ value, regexType });
  if (typeof value !== "number") {
    if (!value) return null;
  }

  switch (regexType) {
    case "phone_number": {
      errorMessage =
        "phone number is not valid. It should be a 10 digit number";
      break;
    }

    case "license_number": {
      errorMessage =
        "license number is not valid. It should be of the form 'ABC00578AA2'";
      break;
    }

    case "car_number": {
      errorMessage =
        "car number is not valid. It should be of the form 'MH-01-XX-0001'";
      break;
    }

    case "latitude" || "longitude": {
      errorMessage =
        "Enter a valid latitude or longitude. location coordinate is of the form 4.4090, 67.534";
      break;
    }

    case "driverId": {
      errorMessage = "The driverId is not valid. This is an integer number";
      break;
    }

    default: {
      errorMessage = `${regexType} is not valid`;
      break;
    }
  }

  if (!regex.test(value)) return errorMessage;

  return;
};

export const errorChecker = (payload: objectLiteral): string[] | null => {
  const result: any = {};

  Object.keys(payload).forEach((key) => {
    if (payload[key]) {
      result[key] = payload[key];
    }

    if (payload[key] === null) {
      result[key] = `${key} is required`;
    }
  });

  return Object.keys(result).length ? result : null;
};
