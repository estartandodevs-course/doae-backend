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

import {
  postPostagemMidd,
  getIdPostagemMidd,
  getPostagemByIdInstituicaoMidd,
  putPostagemMidd,
  putMidiaPostagemMidd
} from "../Middlewares/postagemMiddlewares.js";

const routesPostagem = Router();

routesPostagem.post("/postagens", postPostagemMidd, postPostagem);

routesPostagem.get("/postagens/:id", getIdPostagemMidd, getPostagemById);

routesPostagem.get("/postagens/:id_instituicao", getPostagemByIdInstituicaoMidd, getPostagemByIdInstituicao);

routesPostagem.put("postagens/:id", putPostagemMidd, putPostagem);

routesPostagem.patch("postagens/midia/:id",  upload.single('midia'), putMidiaPostagemMidd, putMidiaPostagem);

routesPostagem.delete("postagens/:id", getIdPostagemMidd, deletePostagem);

export default routesPostagem;