import {
	postProdutos,
	getProdutosById,
	getProdutosByIdMeta,
	putProdutos,
	deleteProduto,
} from "../Controllers/ProdutoController.js";
import { Router } from "express";
import {
	postProdutoMidd,
	getProdutoIdMetaMidd,
	getIdProdutosMidd,
	putProdutoMidd
} from "../Middlewares/produtoMiddlewares.js";

const routesProduto = Router();

routesProduto.post("/produtos", postProdutoMidd, postProdutos);

routesProduto.get("/produtos/:id", getIdProdutosMidd, getProdutosById);

routesProduto.get("/produtos/meta/:id_meta", getProdutoIdMetaMidd, getProdutosByIdMeta);

routesProduto.put("/produtos/:id", putProdutoMidd, putProdutos);

routesProduto.delete("/produtos/:id", getIdProdutosMidd, deleteProduto);

export default routesProduto;