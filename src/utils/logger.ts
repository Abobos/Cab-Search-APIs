import winston, { format, info } from "winston";

const { combine, printf } = format;

const formatOptions = {
  format: combine(
    process.env.NODE_ENV !== "production" ? format.simple() : format.json(),

    printf((info) => {
      const today = new Date();
      const timestamp = `${
        today.toISOString().split("T")[0]
      } ${today.toLocaleTimeString()}`;
      return `${timestamp} ${info.level}: ${info.message}`;
    })
  ),
};

const logger = winston.createLogger({
  ...formatOptions,
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.Console({ level: "info" }),
  ],
});

process.env.NODE_ENV !== "production" &&
  logger.add(
    new winston.transports.Console({
      ...formatOptions,
      level: "error",
    })
  );

export default logger;
