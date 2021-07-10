import { UserData } from "./interfaces";

declare global {
  namespace Express {
    interface Request {
      user: UserData;
    }
  }
}
