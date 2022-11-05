import {
	postProduct,
	getProductById,
	getProductsByIdTarget,
	getProductsByIdInstitution,
	putProducts,
	deleteProduct,
} from "../Controllers/ProductController.js";
import { Router } from "express";
import {
	postProductMidd,
	getProductIdTargetMidd,
	getProductIdInstitutionMidd,
	getIdProductsMidd,
	putProductMidd
} from "../Middlewares/productMiddlewares.js";

const routesProduct = Router();

routesProduct.post("/product", postProductMidd, postProduct);

routesProduct.get("/product/:id", getIdProductsMidd, getProductById);

routesProduct.get("/product/target/:id_target", getProductIdTargetMidd, getProductsByIdTarget);

routesProduct.get("/product/intitution/:id_institution", getProductIdInstitutionMidd, getProductsByIdInstitution);

routesProduct.put("/product/:id", putProductMidd, putProducts);

routesProduct.delete("/product/:id", getIdProductsMidd, deleteProduct);

export default routesProduct;