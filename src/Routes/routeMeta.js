import { postMeta } from "../Controllers/MetasController.js";
import { Router } from "express";

const routesMeta = Router();

routesMeta.post('/metas', postMeta);

export default routesMeta;