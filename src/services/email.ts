import nodemailer from "nodemailer";

import "dotenv/config";
import logger from "@utils/logger";

const sendEmail = async (
  receiver: string,
  subject: string,
  content: string
): Promise<boolean> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "noreply@carssearch.com",
    to: receiver,
    subject: subject,
    html: content,
  };

  try {
    const report = await transporter.sendMail(mailOptions);
    if (report.accepted) {
      return true;
    }
  } catch (error) {
    logger.error(`email-error: ${error.message}`);
    return false;
  }
  return true;
};

export default sendEmail;
