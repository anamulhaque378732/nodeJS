import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandelr from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandelr(req, res);
  },
);

server.listen(5000, () => {
  console.log("server is running successfully!!!");
});
