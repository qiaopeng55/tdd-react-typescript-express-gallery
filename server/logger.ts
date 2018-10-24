import * as expressWinston from "express-winston";
import { Options } from "morgan";
import * as winston from "winston";

const config = {
  transports: [
    new winston.transports.File({
      filename: "./combined.log",
      format: winston.format.json()
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    })
  ]
};

export const logger = winston.createLogger(config);

export const winstonLoggerStream: Options = {
  stream: {
    write: (message: string) => {
      logger.info(message.trim());
    }
  }
};

export const loggerMiddleware = () => expressWinston.logger(config);

export const errorLoggerMiddleware = () =>
  expressWinston.errorLogger({
    level: "error",
    transports: [
      // insert error message to both
      // combined & error logs
      new winston.transports.File({
        filename: "./combined.log",
        format: winston.format.json()
      }),
      new winston.transports.File({
        filename: "./error.log",
        format: winston.format.json()
      }),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.prettyPrint()
        )
      })
    ]
  });
