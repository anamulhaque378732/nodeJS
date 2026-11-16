import { readFileSync } from "node:fs";
import path from "node:path";
import fs from "fs";
import type { IProduct } from "../types/product";
import { json } from "node:stream/consumers";
const filePath = path.join(process.cwd(), "./src/database/db.json");
export const productService = () => {
  // console.log(filePath);

  const result = fs.readFileSync(filePath, "utf-8");
  // console.log(result);
  return JSON.parse(result);
};

export const createProduct = (payLoad: IProduct[]) => {
  fs.writeFileSync(filePath, JSON.stringify(payLoad));
};
