import {
  postMeta,
  getMetas,
  getMetaById,
  getMetaByIdInstituicao,
  putMeta,
  putCurrentQuantity,
  deleteMeta,
} from "../Controllers/MetasController.js";
import { Router } from "express";
import {
  postMetaMidd,
  getMetasMidd,
  getIdMetasMidd,
  getIdMetasInsMidd,
  putMetasMidd,
  putCurrentQuantMidd,
} from "../Middlewares/metaMiddlewares.js";

const routesMeta = Router();

routesMeta.post("/metas", postMetaMidd, postMeta);

routesMeta.get("/metas/list", getMetasMidd, getMetas);

routesMeta.get("/metas/:id", getIdMetasMidd, getMetaById);

routesMeta.get(
  "/metas/instituicao/:id_institution",
  getIdMetasInsMidd,
  getMetaByIdInstituicao
);

routesMeta.put("/metas/:id", putMetasMidd, putMeta);

routesMeta.put("/metas/quantity/:id", putCurrentQuantMidd, putCurrentQuantity);

routesMeta.delete("/metas/:id", getIdMetasMidd, deleteMeta);

export default routesMeta;
