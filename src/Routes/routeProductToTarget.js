import {
    postProductsToTargets,
    getProductsToTargetsByIdProduct,
    getProductsToTargetsByIdTarget,
    getProductsToTargetsByIdTargetAndProduct,
    deleteProductsToTargetsById
} from "../Controllers/ProductsToTargetsController.js";
import { Router } from "express";
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const routeProductToTarget = Router();


routeProductToTarget.post('/relation', requiredToken, postProductsToTargets);

routeProductToTarget.get('/relation', requiredToken, getProductsToTargetsByIdTargetAndProduct);

routeProductToTarget.get('/relation/target/:id_target', getProductsToTargetsByIdTarget);

routeProductToTarget.get('/relation/product/:id_product', requiredToken, getProductsToTargetsByIdProduct);

routeProductToTarget.delete('/relation/:id', requiredToken, deleteProductsToTargetsById);

export default routeProductToTarget;