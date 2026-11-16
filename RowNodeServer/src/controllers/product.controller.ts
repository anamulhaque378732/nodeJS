import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/productService";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  // product --> get , post , put

  const url = req.url;

  const method = req.method;
  const urlParams = url?.split("/");
  // console.log(urlParams);
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

  // console.log(id);

  // get all products

  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const products = productService();
    res.end(
      JSON.stringify({
        message: "Product Retrived Successfully",
        data: products,
      }),
    );
  } //sigle product get
  else if (method === "GET" && id !== null) {
    res.writeHead(200, { "Content-Type": "application/json" });

    const products = productService();
    const product = products.find((p: IProduct) => p.id === id);

    res.end(
      JSON.stringify({
        message: "Product Retrived Successfully",
        data: product,
      }),
    );
  } else if (method === "POST" && url === "/products") {
    // "abcd"=> "a","b" , "c","d"

    const body = await bodyParser(req);
    // console.log(body);

    const newProduct = {
      id: Date.now(),
      ...body,
    };

    // console.log(newProduct);

    const products = productService();

    products.push(newProduct);

    createProduct(products);

    res.writeHead(201, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message: "Product  Created  Successfully",
        data: newProduct,
      }),
    );
  } else if (method === "PUT" && id !== null) {
    const body = await bodyParser(req);

    const products = productService();

    const index = products.findIndex((p: IProduct) => p.id === id);

    // console.log(index);

    if (index < 0) {
      res.end(
        JSON.stringify({
          message: "Product  not   found",
        }),
      );
    }

    // product =[{},{},{}]

    // console.log(products[index]);

    products[index] = { id: products[index].id, ...body };

    createProduct(products);

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        message: "Product updated successfully ",
        data: products[index],
      }),
    );
  }
};

export default productController;
