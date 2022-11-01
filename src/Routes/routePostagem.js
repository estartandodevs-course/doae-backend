import {
    postPostagem,
    getPostagemById,
    getPostagemByIdInstituicao,
    putPostagem,
    putMidiaPostagem,
    deletePostagem
} from "../Controllers/PostagensController.js";

import { Router } from 'express'; 

const routesPostagem = Router();

routesPostagem.post("/postagens",  postPostagem);

routesPostagem.get("/postagens/:id", getPostagemById);

routesPostagem.get("/postagens/:id_instituicao", getPostagemByIdInstituicao);

routesPostagem.put("postagens/:id", putPostagem);

routesPostagem.put("postagens/midia/:id", putMidiaPostagem);

routesPostagem.delete("postagens/:id", deletePostagem);

export default routesPostagem;