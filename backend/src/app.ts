import express from "express";
import path from "path";
import trainStation from "trainstation";
import * as env from "./environment";
import logger from "./logger";

const app = express();

app.use(express.json());

if (env.isDev) {
  trainStation.enableHotReload();
  logger.info("Hot Reloading is enabled");
}
trainStation.generateRoutes(path.join(__dirname, "routes"));
trainStation.register(app);

export default app;
