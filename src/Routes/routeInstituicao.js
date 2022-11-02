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
	"/institution/logomarca",
	upload.single("logomarca"),
	patchMidiaInstituicaoMidd,
	updateFotoInstituicao
);

routesInstituicao.post("/institution", postInstituicaoMidd, postInstituicao);

routesInstituicao.get("/institution", getInstituicao);

routesInstituicao.get(
	"/institution/:id",
	idInstituicaoMidd,
	getInstituicaoById
);

routesInstituicao.put("/institution/:id", idInstituicaoMidd, putInstituicao);

routesInstituicao.delete(
	"/institution/:id",
	idInstituicaoMidd,
	deleteInstituicaoById
);

export default routesInstituicao;
