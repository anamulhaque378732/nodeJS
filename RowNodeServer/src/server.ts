import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url; // "/"."/product", "/"
    const method = req.method; // "POST","GET","PUT"

    if (url == "/" && method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ message: "This is root route" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ message: "This is root Products route" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ message: "This route is not found" }));
    }
  },
);

server.listen(5000, () => {
  console.log("server is running successfully!!!");
});
