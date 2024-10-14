import mongoose, { ConnectOptions } from "mongoose";
import EnvVars from "../constants/EnvVars";
const mongo_url = EnvVars.Db.mongo_url;

export const mongoConnect = async () => {
  await mongoose
    .connect(mongo_url, {} as ConnectOptions)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });
};
