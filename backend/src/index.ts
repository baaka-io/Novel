import { port } from "./environment";
import logger from "./logger";
import server from "./server";

server.listen(port, () => {
  logger.info(`HTTP Server listening on port ${port}`);
});
