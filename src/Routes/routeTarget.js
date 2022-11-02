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

routesTarget.post("/target", postTargetMidd, postTarget);

routesTarget.get("/target", getTargetsMidd, getTargets);

routesTarget.get("/target/:id", getIdTargetMidd, getTargetById);

routesTarget.get(
  "/target/institution/:id_institution",
  getIdTargetInsMidd,
  getTargetByIdInstitution
);

routesTarget.put("/target/:id", putTargetMidd, putTarget);

routesTarget.put("/target/quantity/:id", putCurrentQuantMidd, putCurrentQuantity);

routesTarget.delete("/target/:id", getIdTargetMidd, deleteTarget);

export default routesTarget;
