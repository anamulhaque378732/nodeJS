import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandelr from "./routes/route";
import config from "./config";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandelr(req, res);
  },
);

server.listen(config.port, () => {
  console.log(`Server is running on the port ${config.port}`);
});
