import {
    postPostagem,
    getPostagemById,
    getPostagemByIdInstituicao,
    putPostagem,
    putMidiaPostagem,
    deletePostagem
} from "../Controllers/PostagensController.js";

import { uploadFile } from "../Middlewares/multerMiddlewares.js";

const upload = uploadFile();

import { Router } from 'express'; 

const routesPostagem = Router();

routesPostagem.post("/postagens",  postPostagem);

routesPostagem.get("/postagens/:id", getPostagemById);

routesPostagem.get("/postagens/:id_instituicao", getPostagemByIdInstituicao);

routesPostagem.put("postagens/:id", putPostagem);

routesPostagem.patch("postagens/midia/:id",  upload.single('midia'), putMidiaPostagem);

routesPostagem.delete("postagens/:id", deletePostagem);

export default routesPostagem;