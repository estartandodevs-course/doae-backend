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

const routesProduct = Router();

routesProduct.post("/product", postProductMidd, postProduct);

routesProduct.get("/product/:id", getIdProductsMidd, getProductById);

routesProduct.get("/product/institution/:id_institution", getProductIdInstitutionMidd, getProductsByIdInstitution);

routesProduct.put("/product/:id", putProductMidd, putProducts);

routesProduct.delete("/product/:id", getIdProductsMidd, deleteProduct);

export default routesProduct;