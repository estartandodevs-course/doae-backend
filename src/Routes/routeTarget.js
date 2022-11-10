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
} from "../Middlewares/targetMiddlewares.js";
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const routesTarget = Router();

routesTarget.post("/target", requiredToken, postTargetMidd, postTarget);

routesTarget.get("/target", getTargetsMidd, getTargets);

routesTarget.get("/target/:id", getIdTargetMidd, getTargetById);

routesTarget.get(
  "/target/institution/:id_institution",
  getIdTargetInsMidd,
  getTargetByIdInstitution
);

routesTarget.put("/target/:id", requiredToken, putTargetMidd, putTarget);

routesTarget.put("/target/quantity/:id", requiredToken, putCurrentQuantMidd, putCurrentQuantity);

routesTarget.delete("/target/:id", requiredToken, getIdTargetMidd, deleteTarget);

export default routesTarget;
