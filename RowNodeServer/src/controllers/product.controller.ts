import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/productService";
import type { IProduct } from "../types/product";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  // product --> get , post , put

  const url = req.url;

  const method = req.method;
  const urlParams = url?.split("/");
  // console.log(urlParams);
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

  // console.log(id);

  // Get all products

  if (url === "/products" && method === "GET") {
    try {
      const products = productService();

      sendResponse(
        res,
        true,
        200,
        "Products  retrived  Successfully",
        products,
      );
    } catch (error) {
      sendResponse(res, true, 500, "Internal server error");
    }
  } //sigle product get
  else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: IProduct) => p.id === id);

    if (!product) {
      return sendResponse(res, false, 404, "Product not found");
    }
    try {
      sendResponse(res, true, 200, "Product Retrived Successfully", product);
    } catch (error) {
      return sendResponse(res, false, 404, "Product not found");
    }
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

    try {
      sendResponse(
        res,
        true,
        200,
        "Product  Created  Successfully",
        newProduct,
      );
    } catch (error) {
      return sendResponse(res, false, 404, "Product not addeded");
    }
  } else if (method === "PUT" && id !== null) {
    const body = await bodyParser(req);

    const products = productService();

    const index = products.findIndex((p: IProduct) => p.id === id);

    // console.log(index);

    if (index < 0) {
      return sendResponse(res, false, 404, "Product not addeded");
    }
    // product =[{},{},{}]
    // console.log(products[index]);
    products[index] = { id: products[index].id, ...body };
    createProduct(products);
    try {
      sendResponse(
        res,
        true,
        200,
        "Product updated  Successfully",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, false, 404, "Product not updated");
    }
  } else if (method === "DELETE" && id !== null) {
    const body = await bodyParser(req);

    const products = productService();

    const index = products.findIndex((p: IProduct) => p.id === id);

    if (index < 0) {
      return sendResponse(res, false, 404, "Product not deleted");
    }

    products.splice(index, 1);

    createProduct(products);

    try {
      sendResponse(
        res,
        true,
        200,
        "Product  delete   Successfully",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, false, 404, "Product not deleted");
    }
  }
};

export default productController;
