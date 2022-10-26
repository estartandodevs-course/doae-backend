import {
	postInstituicao,
    getInstituicao,
    getInstituicaoById,
    putInstituicao, 
    deleteInstituicaoByIdService
} from "../Controllers/InstituicaoController";

import { Router } from "express";

const routesInstituicao = Router();

routesInstituicao.post("instituicao", postInstituicao);

routesInstituicao.get("instituicao", getInstituicao);

routesInstituicao.get("instituicao/:id", getInstituicaoById);

routesInstituicao.put("instituicao", putInstituicao);

routesInstituicao.delete("instituicao", deleteInstituicaoByIdService);

export default routesInstituicao;