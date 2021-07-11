import { Request, Response, NextFunction } from "express";

import DriverRepository from "@repositories/driver";

import { sendSuccessResponse } from "@modules/sendResponse";

import { createToken } from "@utils/tokenHandler";
import sendEmail from "@services/email";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name: driverName,
        email: driverEmail,
        phone_number: driverPhoneNumber,
        license_number: driverLicenseNumber,
        car_number: driverCarNumber,
      } = req.body;

      const column = "name, email, phoneNumber, licenseNumber, carNumber";

      const values = `'${driverName}', '${driverEmail}', '${driverPhoneNumber}', '${driverLicenseNumber}', '${driverCarNumber}'`;

      const { id, name, email, phonenumber, licensenumber, carnumber } =
        await DriverRepository.create(column, values);

      const token = createToken({ id, email });

      const msg = `Dear ${name}, 
                    <br/> <br/> Kindly find below your verification Link <br/>
                    <br/>
                    ${req.protocol}://${req.headers.host}/api/v1/drivers/${token}/verify
                    <br/>
                    <br/>
                    <b>Kindly note that the link will expire within 10 minutes</b>
                    `;

      const emailResponse = await sendEmail(
        driverEmail,
        "Cars Search System Application Email Verification",
        msg
      );

      let message =
        "your registration is successful. A verification link has been sent to your email, Kindly verify your email to enjoy the cars search service";

      if (!emailResponse) {
        message =
          "your registration is successful, but we couldn't send your  verification link to your email.";
      }
      return sendSuccessResponse(res, 201, message, {
        id,
        name,
        email,
        phone_number: phonenumber,
        license_number: licensenumber,
        car_number: carnumber,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req;

      const column = "isverified";
      const condition = `id = ${userData.user.id} AND email = '${userData.user.email}'`;
      const values = "TRUE";

      await DriverRepository.Update(column, condition, values);

      return res.status(200).json({
        status: "success",
        message: "Verification successful",
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default AuthController;
