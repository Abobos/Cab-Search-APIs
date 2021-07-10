import { objectLiteral } from "../interfaces";

export const emailRegex: RegExp = /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export const passwordRegex: RegExp = /(?=^.{8,}$)(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[0-9].*)/;

export const nameRegex: RegExp = /^[A-Za-z]+\s([A-Za-z]+\s)?[A-Za-z]+$/;

export const addressRegex: RegExp = /./;

export const phoneNumberRegex: RegExp = /[\d]{11,}/;

export const magicTrimmer = (payload: objectLiteral): objectLiteral => {
  const data = {};

  Object.keys(payload).forEach((key) => {
    const value: any = payload[key];
    Object.assign(data, { [key]: value.trim() });
  });

  return data;
};

export const validateAgainstRegex = (
  value: string,
  regex: RegExp,
  regexType: string
): any => {
  let errorMessage: string = "";

  if (!value) return null;

  switch (regexType) {
    case "password": {
      errorMessage =
        "password must contain at least eight characters, one Uppercase letter, one lowercase letter, and one digit";
      break;
    }

    case "phone_number": {
      errorMessage = "phone number is not valid";
      break;
    }

    default: {
      errorMessage = `${regexType} is not valid`;
      break;
    }
  }

  if (!regex.test(value)) return errorMessage;

  return undefined;
};

export const errorChecker = (payload: objectLiteral): string[] | null => {
  const result: any = {};

  Object.keys(payload).forEach((key) => {
    if (payload[key]) {
      result[key] = payload[key];
    } else if (payload[key] === null) {
      result[key] = `${key} is required`;
    }
  });

  return Object.keys(result).length ? result : null;
};
