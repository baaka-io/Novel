import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

export default logger;
