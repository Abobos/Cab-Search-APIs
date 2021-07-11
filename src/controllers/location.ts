import { Request, Response, NextFunction } from "express";

import DriverRepository from "@repositories/driver";

import LocationRepository from "@repositories/location";

import { NotFoundError } from "../exceptions";
import {
  sendErrorResponse,
  sendSuccessResponseII,
} from "@modules/sendResponse";

class LocationController {
  static async saveDriverLocation(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const driverId = +req.body.driverId;

      const findColumn = "*";
      const findCondition = `id = ${driverId}`;

      const driverDetailsCount = await DriverRepository.findOne(
        findColumn,
        findCondition
      );

      if (!driverDetailsCount)
        throw new NotFoundError(
          "We can't save the location of a driver does not exist. Kindly register driver"
        );

      const findColumnI = "*";
      const findConditionI = `driverId = ${driverId}`;

      const driverLocationCount = await LocationRepository.findOne(
        findColumnI,
        findConditionI
      );

      const { latitude, longitude } = req.body;

      if (!driverLocationCount) {
        const column = "driverId, latitude, longitude";

        const values = `${driverId}, ${latitude}, ${longitude}`;

        const { id } = await LocationRepository.create(column, values);

        if (id) sendSuccessResponseII(res, 200, "Location Save successfully");
      } else {
        const column = "latitude";
        const columnII = "longitude";
        const condition = `driverId = ${driverId}`;
        const values = latitude;
        const valuesII = longitude;

        await LocationRepository.UpdateMultiple(
          column,
          columnII,
          condition,
          values,
          valuesII
        );

        sendSuccessResponseII(res, 200, "Location Save successfully");
      }
    } catch (error) {
      return next(error);
    }
  }
}

export default LocationController;
