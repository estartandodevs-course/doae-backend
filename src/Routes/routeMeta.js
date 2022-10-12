import {
  postMeta,
  getMetas,
  getMetaById,
  getMetaByIdInstitution,
  putMeta,
  putCurrentQuantity,
  deleteMeta,
} from "../Controllers/MetasController.js";
import { Router } from "express";

const routesMeta = Router();

routesMeta.post("/metas", postMeta);

routesMeta.get("/metas", getMetas);

routesMeta.get("/metas", getMetaById);

routesMeta.get("/metas", getMetaByIdInstitution);

routesMeta.put("/metas", putMeta);

routesMeta.put("/metas", putCurrentQuantity); //i'm crying

routesMeta.delete("/metas", deleteMeta);

export default routesMeta;