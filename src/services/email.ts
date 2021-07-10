import sgMail from "@sendgrid/mail";
import "dotenv/config";

import { InternalServerError } from "../exceptions";

sgMail.setApiKey(<string>process.env.SENDGRID_API_KEY);

const sendEmail = async (
  receiver: string,
  subject: string,
  content: string
) => {
  const data = {
    to: receiver,
    from: "noreply@propertyprolite.com",
    subject: subject,
    html: content
  };
  try {
    const response = await sgMail.send(data);
    if (response.length) return "success";
  } catch (err) {
    throw new InternalServerError(err);
  }
};

export default sendEmail;
