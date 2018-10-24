import * as compression from "compression";
// import * as cors from "cors";
import * as express from "express";
import * as jsonServer from "json-server";
import * as morgan from "morgan";
import * as path from "path";
import * as db from "./products.json";

import { errorLoggerMiddleware, logger, winstonLoggerStream } from "./logger";

const NotTest = process.env.NODE_ENV !== "test";

const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);

// enable cors middleware
// app.use(cors());

// compress all responses
app.use(compression());

// app.use(morgan("dev"));

// Place the express-winston logger before the router.
// disable logging for test
if (NotTest) {
  app.use(morgan("dev", winstonLoggerStream));
}

app.use("/api", jsonServer.router(path.join(__dirname, "products.json")));

// Place the express-winston errorLogger after the router.
app.use(errorLoggerMiddleware());

// add NODE_ENV check to prevent EADDRINUSE error during testing
if (NotTest) {
  app.listen(app.get("port"), () => {
    logger.log({
      level: "info",
      message: "server start at port " + app.get("port")
    });
  });
}

export default app;
