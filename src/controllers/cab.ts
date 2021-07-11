import { Request, Response, NextFunction } from "express";

import DriverRepository from "@repositories/driver";

class LocationController {
  static async getAvailableCabs(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const getAllCabs = await DriverRepository.findAll();

      return res.status(200).json({
        status: "success",
        message: "Verification successful",
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default LocationController;
