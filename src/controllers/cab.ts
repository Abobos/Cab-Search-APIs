import { Request, Response, NextFunction } from "express";

import db from "@config/pool";
import {
  sendSuccessResponse,
  sendSuccessResponseII,
} from "@modules/sendResponse";
import { AvailableCars } from "../interfaces";

import { calculateHaversineDistance } from "@utils/harversine";

class LocationController {
  static async getAvailableCabs(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const query =
        "select d.name, d.carnumber, d.phonenumber, l.latitude, l.longitude from drivers d, locations l where d.id = l.driverid";

      const { rows } = await db.query(query);

      if (rows.length == 0) {
        sendSuccessResponseII(res, 200, "no available cars");
      }

      const { latitude: latitude1, longitude: longitude2 } = req.body;

      const availableCars = rows.filter((car: AvailableCars) => {
        const distance = Math.round(
          calculateHaversineDistance(
            latitude1,
            longitude2,
            +car.latitude,
            +car.longitude
          )
        );

        return distance <= 4;
      });

      if (availableCars.length > 0) {
        sendSuccessResponse(
          res,
          200,
          "these are the available cars at the moment",
          availableCars
        );
      } else {
        sendSuccessResponseII(res, 200, "no available cars");
      }
    } catch (error) {
      return next(error);
    }
  }
}

export default LocationController;
