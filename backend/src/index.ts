import { port } from "./environment";
import logger from "./logger";
import server from "./server";
import ON_DEATH from "death";

ON_DEATH((signal) => {
  logger.info("Received signal " + signal);
  process.exit(1);
});

server.listen(port, () => {
  logger.info(`HTTP Server listening on port ${port}`);
});
