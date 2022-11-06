import {
    postProductsToTargets,
    getProductsToTargetsByIdProduct,
    getProductsToTargetsByIdTarget,
    getProductsToTargetsByIdTargetAndProduct,
    deleteProductsToTargetsById
} from "../Controllers/ProductsToTargetsController.js";
import { Router } from "express";

const routeProductToTarget = Router();


routeProductToTarget.post('/relation', postProductsToTargets);

routeProductToTarget.get('/relation', getProductsToTargetsByIdTargetAndProduct);

routeProductToTarget.get('/relation/target/:id_target', getProductsToTargetsByIdTarget);

routeProductToTarget.get('/relation/product/:id_product', getProductsToTargetsByIdProduct);

routeProductToTarget.delete('/relation/:id', deleteProductsToTargetsById);

export default routeProductToTarget;