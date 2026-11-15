import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/productService";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  // product --> get , post , put

  const url = req.url;

  const method = req.method;

  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const products = productService();
    res.end(
      JSON.stringify({
        message: "Product Retrived Successfully",
        data: products,
      }),
    );
  }
};

export default productController;
