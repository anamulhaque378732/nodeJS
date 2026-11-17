import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    // get book

    if (method == "GET" && url == "/books") {
      console.log("I am in books route");
    }

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Server is running",
        data: "Hello developer",
      }),
    );
  },
);

server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
