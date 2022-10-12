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

routesMeta.get("/metas/:id", getMetaById);

routesMeta.get("/metas/institution/:id_institution", getMetaByIdInstitution);

routesMeta.put("/metas/:id", putMeta);

routesMeta.put("/metas/quantity/:id", putCurrentQuantity); //i'm crying

routesMeta.delete("/metas/:id", deleteMeta);

export default routesMeta;