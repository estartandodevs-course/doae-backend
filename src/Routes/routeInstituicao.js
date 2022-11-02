import {
	postInstituicao,
	getInstituicao,
	getInstituicaoById,
	putInstituicao,
	deleteInstituicaoById,
	updateFotoInstituicao,
} from "../Controllers/InstituicaoController.js";
import { uploadFile } from "../Middlewares/multerMiddlewares.js";
import {
	postInstituicaoMidd,
	patchMidiaInstituicaoMidd,
	idInstituicaoMidd,
} from "../Middlewares/instituicaoMiddlewares.js";

const upload = uploadFile();

import { Router } from "express";

const routesInstituicao = Router();

routesInstituicao.patch(
	"/instituicao/logomarca",
	upload.single("logomarca"),
	patchMidiaInstituicaoMidd,
	updateFotoInstituicao
);

routesInstituicao.post("/instituicao", postInstituicaoMidd, postInstituicao);

routesInstituicao.get("/instituicao", getInstituicao);

routesInstituicao.get(
	"/instituicao/:id",
	idInstituicaoMidd,
	getInstituicaoById
);

routesInstituicao.put("/instituicao/:id", idInstituicaoMidd, putInstituicao);

routesInstituicao.delete(
	"/instituicao/:id",
	idInstituicaoMidd,
	deleteInstituicaoById
);

export default routesInstituicao;
