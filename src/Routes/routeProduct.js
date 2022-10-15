import {
	postProduct,
	getProductById,
	getProductByIdMeta,
	putProduct,
	deleteProduct,
} from "../Controllers/ProductController.js";
import { Router } from "express";
import {
	postProductMidd,
	getProductIdMetaMidd,
	getIdProductsMidd,
	putProductMidd
} from "../Middlewares/productMiddlewares";

const routesProduct = Router();

routesProduct.post("/product", postProductMidd, postProduct);

routesProduct.get("/product/:id", getIdProductsMidd, getProductById);

routesProduct.get("/product/meta/:id_meta", getProductIdMetaMidd, getProductByIdMeta);

routesProduct.put("/product/:id", putProductMidd, putProduct);

routesProduct.delete("/product/:id", getIdProductsMidd, deleteProduct);

export default routesProduct;