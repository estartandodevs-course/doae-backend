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

const routesDoacao = Router();

routesDoacao.post("/doacoes",  postDoacao);

routesDoacao.get("/doacoes", getDoacao);

routesDoacao.get("/doacoes", getDoacaoById);

routesDoacao.get("/doacoes", getDoacaoByIdInstitution);

routesDoacao.get("/doacoes", getDoacaoByIdMeta);

routesDoacao.put("/doacoes", putDoacao);

routesDoacao.delete("/doacoes", deleteDoacao);

export default routesDoacao;