import "module-alias/register";

import http from "http";
import { App } from "./app";
import { logger } from "./utils";

const expressApp = new App();

const PORT = expressApp.getPort();

const server = http.createServer(expressApp.app);

server.listen(PORT, () =>
  logger.info(`${expressApp.getEnv()}:server App started on PORT ${PORT}`)
);

export default server;
