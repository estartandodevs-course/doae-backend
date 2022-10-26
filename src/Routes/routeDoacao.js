import {
	postDoacao,
	getDoacao,
	getDoacaoById,
	getDoacaoByIdInstitution,
	getDoacaoByIdMeta,
	putDoacao,
	deleteDoacao,
} from "../Controllers/DoacaoController";

import { Router } from "express";

import {
	postDoacaoMidd,
	getDoacaoMidd,
	getIdDoacaoMidd,
	getIdDoacaoInsMidd,
	getIdDoacaoMetaMidd,
	putDoacaoMidd
} from '../Middlewares/doacaoMiddlewares'

const routesDoacao = Router();

routesDoacao.post("/doacoes", postDoacaoMidd, postDoacao);

routesDoacao.get("/doacoes/list", getDoacaoMidd, getDoacao);

routesDoacao.get("/doacoes/:id", getIdDoacaoMidd, getDoacaoById);

routesDoacao.get("/doacoes/instituicao/:id_instituicao", getIdDoacaoInsMidd, getDoacaoByIdInstitution);

routesDoacao.get("/doacoes/metas/:id_meta", getIdDoacaoMetaMidd, getDoacaoByIdMeta);

routesDoacao.put("/doacoes", putDoacaoMidd, putDoacao);

routesDoacao.delete("/doacoes", getIdDoacaoMidd, deleteDoacao);

export default routesDoacao;