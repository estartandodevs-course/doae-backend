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

routesProduct.post("/product", postProductMidd, postProduct);

routesProduct.get("/product/:id", getIdProductsMidd, getProductById);

routesProduct.get("/product/target/:id_target", getProductIdTargetMidd, getProductsByIdTarget);

routesProduct.put("/products/:id", putProductMidd, putProducts);

routesProduct.delete("/products/:id", getIdProductsMidd, deleteProduct);

export default routesProduct;