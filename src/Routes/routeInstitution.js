import {
	postInstitution,
	getInstitutions,
	getInstitutionById,
	putInstitution,
	deleteInstitutionById,
	updateLogoInstitution,
	putCredentialsInstitution,
} from "../Controllers/InstitutionController.js";
import { uploadFile } from "../Middlewares/multerMiddlewares.js";
import {
	postInstitutionMidd,
	idInstitutionMidd,
} from "../Middlewares/institutionMiddlewares.js";
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const upload = uploadFile();

import { Router } from "express";

const routesInstitution = Router();

routesInstitution.patch(
	"/institution/logo",
	requiredToken,
	upload.single("logo"),
	updateLogoInstitution
);

routesInstitution.post(
	"/institution",
	requiredToken,
	postInstitutionMidd,
	upload.single("logo"),
	postInstitution
);

routesInstitution.get("/institution", getInstitutions);

routesInstitution.get(
	"/institution/:id",
	idInstitutionMidd,
	getInstitutionById
);

routesInstitution.put("/institution/:id", requiredToken, idInstitutionMidd, putInstitution);

routesInstitution.put(
	"/institution/credentials/:id",
	requiredToken,
	idInstitutionMidd,
	putCredentialsInstitution
);

routesInstitution.delete(
	"/institution/:id",
	requiredToken,
	idInstitutionMidd,
	deleteInstitutionById
);

export default routesInstitution;
