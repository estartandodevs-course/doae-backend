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

routesProduto.post("/produto", postProdutoMidd, postProdutos);

routesProduto.get("/produto/:id", getIdProdutosMidd, getProdutosById);

routesProduto.get("/produto/meta/:id_meta", getProdutoIdMetaMidd, getProdutosByIdMeta);

routesProduto.put("/produto/:id", putProdutoMidd, putProdutos);

routesProduto.delete("/produto/:id", getIdProdutosMidd, deleteProduto);

export default routesProduto;