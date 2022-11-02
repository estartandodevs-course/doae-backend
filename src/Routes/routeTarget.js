import {
  postTarget,
  getTargets,
  getTargetById,
  getTargetByIdInstitution,
  putTarget,
  putCurrentQuantity,
  deleteTarget,
} from "../Controllers/TargetsController.js";
import { Router } from "express";
import {
  postTargetMidd,
  getTargetsMidd,
  getIdTargetMidd,
  getIdTargetInsMidd,
  putTargetMidd,
  putCurrentQuantMidd,
} from "../Middlewares/TargetMiddlewares.js";

const routesTarget = Router();

routesTarget.post("/targets", postTargetMidd, postTarget);

routesTarget.get("/targets/list", getTargetsMidd, getTargets);

routesTarget.get("/targets/:id", getIdTargetMidd, getTargetById);

routesTarget.get(
  "/targets/institution/:id_institution",
  getIdTargetInsMidd,
  getTargetByIdInstitution
);

routesTarget.put("/targets/:id", putTargetMidd, putTarget);

routesTarget.put("/targets/quantity/:id", putCurrentQuantMidd, putCurrentQuantity);

routesTarget.delete("/targets/:id", getIdTargetMidd, deleteTarget);

export default routesTarget;
