import {
	postProduct,
	getProductById,
	getProductByIdMeta,
	putProduct,
	deleteProduct,
} from "../Controllers/ProductController.js";
import { Router } from "express";

const routesProduct = Router();

routesProduct.post("/product", postProduct);

routesProduct.get("/product/:id", getProductById);

routesProduct.get("/product/meta/:id_meta", getProductByIdMeta);

routesProduct.put("/product/:id", putProduct);

routesProduct.delete("/product/:id", deleteProduct);

export default routesProduct;