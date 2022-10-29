import {
	postInstituicao,
    getInstituicao,
    getInstituicaoById,
    putInstituicao, 
    deleteInstituicaoById,
    updateFotoInstituicao
} from "../Controllers/InstituicaoController.js";
import { uploadFile } from "../Middlewares/multerMiddlewares.js";

const upload = uploadFile()

import { Router } from "express";

const routesInstituicao = Router();

routesInstituicao.patch('/instituicao/logomarca', upload.single('logomarca'), updateFotoInstituicao);

routesInstituicao.post("/instituicao", upload.single('logomarca'), postInstituicao);

routesInstituicao.get("/instituicao", getInstituicao);

routesInstituicao.get("/instituicao/:id", getInstituicaoById);

routesInstituicao.put("/instituicao/:id", putInstituicao);

routesInstituicao.delete("/instituicao/:id", deleteInstituicaoById);

export default routesInstituicao;