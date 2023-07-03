import mongoose from "mongoose";
import { ENVIRONMENTS } from "./index.config";

let db: typeof mongoose | null = null;
const urlMongoDb: string = ENVIRONMENTS.DB.URL || "";

const dbConnection = {
  db,
  connect: () => {
    if (db) return db;
    return mongoose
      .connect(urlMongoDb)
      .then((connection) => {
        db = connection;
        console.log("MongoDb configurated.");
      })
      .catch((err) => console.log(err));
  },
};

export { dbConnection };
