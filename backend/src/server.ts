import http from "http";
import app from "./app";
import logger from "./logger";

const server = http.createServer(app);

server.on("error", (err) => {
  logger.error(err.message);
});

export default server;
