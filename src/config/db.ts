import logger from "@utils/logger";
import "dotenv/config";
import mongoose from "mongoose";

const { DATABASE_URL_DEV } = process.env;

const connectDb = async () => {
  try {
    await mongoose.connect(
      DATABASE_URL_DEV,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => {
        logger.error("Database connected successfully");
      }
    );
  } catch (error) {
    logger.error("Database not connected", error.message);
  }
};

export default connectDb;
