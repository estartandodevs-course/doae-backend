import {
	postInstitution,
	getInstitutions,
	getInstitutionById,
	putInstitution,
	deleteInstitutionById,
	updateLogoInstitution,
} from "../Controllers/InstitutionController.js";
import { uploadFile } from "../Middlewares/multerMiddlewares.js";
import {
	postInstitutionMidd,
	patchLogoInstitutionMidd,
	idInstitutionMidd,
} from "../Middlewares/institutionMiddlewares.js";

const upload = uploadFile();

import { Router } from "express";

const routesInstitution = Router();

routesInstitution.patch(
	"/institution/logo",
	upload.single("logo"),
	patchLogoInstitutionMidd,
	updateLogoInstitution
);

routesInstitution.post("/institution", postInstitutionMidd, postInstitution);

routesInstitution.get("/institution", getInstitutions);

routesInstitution.get(
	"/institution/:id",
	idInstitutionMidd,
	getInstitutionById
);

routesInstitution.put("/institution/:id", idInstitutionMidd, putInstitution);

routesInstitution.delete(
	"/institution/:id",
	idInstitutionMidd,
	deleteInstitutionById
);

export default routesInstitution;
