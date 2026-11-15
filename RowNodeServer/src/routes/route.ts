// route handler

import { IncomingMessage, type ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandelr = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url; // "/"."/product", "/"
  const method = req.method; // "POST","GET","PUT"

  if (url == "/" && method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ message: "This is root route" }));
  } else if (url?.startsWith("/products")) {
    // Products --> get, put, post , delete

    productController(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ message: "This route is not found" }));
  }
};

export default routeHandelr;
