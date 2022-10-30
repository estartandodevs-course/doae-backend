import {
	postDoacao,
	getDoacao,
	getDoacaoById,
	getDoacaoByIdInstituicao,
	getDoacaoByIdMeta,
	putDoacao,
	deleteDoacao,
} from "../Controllers/DoacaoController.js";

import { Router } from "express";

import {
	postDoacaoMidd,
	getDoacaoMidd,
	getIdDoacaoMidd,
	getIdDocaoInsMidd,
	getIdDoacaoMetaMidd,
	putDoacaoMidd
} from '../Middlewares/doacaoMiddlewares.js'

const routesDoacao = Router();

routesDoacao.post("/doacoes", postDoacaoMidd, postDoacao);

routesDoacao.get("/doacoes/list", getDoacaoMidd, getDoacao);

routesDoacao.get("/doacoes/:id", getIdDoacaoMidd, getDoacaoById);

routesDoacao.get("/doacoes/instituicao/:id_institution", getIdDocaoInsMidd, getDoacaoByIdInstituicao);

routesDoacao.get("/doacoes/metas/:id_meta", getIdDoacaoMetaMidd, getDoacaoByIdMeta);

routesDoacao.put("/doacoes/:id", putDoacaoMidd, putDoacao);

routesDoacao.delete("/doacoes/:id", getIdDoacaoMidd, deleteDoacao);

export default routesDoacao;