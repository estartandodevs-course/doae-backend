import {
	postProduct,
	getProductById,
	getProductsByIdTarget,
	putProducts,
	deleteProduct,
} from "../Controllers/ProductController.js";
import { Router } from "express";
import {
	postProductMidd,
	getProductIdTargetMidd,
	getIdProductsMidd,
	putProductMidd
} from "../Middlewares/productMiddlewares.js";

const routesProduct = Router();

routesProduct.post("/products", postProductMidd, postProduct);

routesProduct.get("/products/:id", getIdProductsMidd, getProductById);

routesProduct.get("/products/meta/:id_meta", getProductIdTargetMidd, getProductsByIdTarget);

routesProduct.put("/products/:id", putProductMidd, putProducts);

routesProduct.delete("/products/:id", getIdProductsMidd, deleteProduct);

export default routesProduct;