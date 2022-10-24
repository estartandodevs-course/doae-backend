import {
	postProduto,
	getProdutoById,
	getProdutoByIdMeta,
	putProduto,
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

routesProduto.post("/produto", postProdutoMidd, postProduto);

routesProduto.get("/produto/:id", getIdProdutosMidd, getProdutoById);

routesProduto.get("/produto/meta/:id_meta", getProdutoIdMetaMidd, getProdutoByIdMeta);

routesProduto.put("/produto/:id", putProdutoMidd, putProduto);

routesProduto.delete("/produto/:id", getIdProdutosMidd, deleteProduto);

export default routesProduto;