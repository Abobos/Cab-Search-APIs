import "dotenv/config";
import * as jwt from "jsonwebtoken";

import { objectLiteral } from "../interfaces";

export const createToken = (payload: objectLiteral) => {
  const token = jwt.sign(payload, <string>process.env.JWT_KEY, {
    expiresIn: "24h"
  });
  return token;
};

export const verifyToken = (token: string) => {
  const verifiedToken = jwt.verify(token, <string>process.env.JWT_KEY);
  return verifiedToken;
};
