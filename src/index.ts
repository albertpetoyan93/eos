import "./pre-start";
import logger from "jet-logger";
import http from "http";
import EnvVars from "@src/constants/EnvVars";
import app from "./server";
import { mongoConnect } from "./configs/mongoose";
import ActionService from "./services/ActionService";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

export const server = http.createServer(app);

async function start() {
  try {
    await mongoConnect();
    server.listen(EnvVars.Port, () => {
      logger.info(SERVER_START_MSG);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
