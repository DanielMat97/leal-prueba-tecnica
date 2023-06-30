import dotenv from "dotenv";

dotenv.config();

export const ENVIRONMENTS = {
  SERVER: {
    PORT: process.env.SERVER_PORT,
    API_VERSION: process.env.SERVER_API_VERSION,
    NAME: process.env.SERVER_NAME,
  },
};
