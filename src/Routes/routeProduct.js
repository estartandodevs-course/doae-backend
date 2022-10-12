import {
  postProduct,
  getProductById,
  getProductByIdMeta,
  putProduct,
  deleteProduct,
} from "../Controllers/ProductController";
import { Router } from 'express';

const routesProduct = Router();

routesProduct.post('/product', postProduct);

routesProduct.get('/product', getProductById);

routesProduct.get('/product', getProductByIdMeta);

routesProduct.put('/product', putProduct);

routesProduct.delete('/product', deleteProduct);

export default routesProduct;