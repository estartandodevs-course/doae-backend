import {
	postProduct,
	getProductById,
	getProductsByIdInstitution,
	putProducts,
	deleteProduct,
} from "../Controllers/ProductController.js";
import { Router } from "express";
import {
	postProductMidd,
	getProductIdInstitutionMidd,
	getIdProductsMidd,
	putProductMidd
} from "../Middlewares/productMiddlewares.js";
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const routesProduct = Router();

routesProduct.post("/product", requiredToken, postProductMidd, postProduct);

routesProduct.get("/product/:id", requiredToken, getIdProductsMidd, getProductById);

routesProduct.get("/product/institution/:id_institution", requiredToken, getProductIdInstitutionMidd, getProductsByIdInstitution);

routesProduct.put("/product/:id", requiredToken, putProductMidd, putProducts);

routesProduct.delete("/product/:id", requiredToken, getIdProductsMidd, deleteProduct);

export default routesProduct;