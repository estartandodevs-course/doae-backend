import {
    postPublication,
    getPublicationById,
    getPublicationsByIdInstitution,
    getPublicationsAll,
    putPublication,
    putMidiaPublication,
    deletePublication
} from "../Controllers/PublicationController.js";

import { uploadFile } from "../Middlewares/multerMiddlewares.js";
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const upload = uploadFile();

import { Router } from 'express'; 

import {
  postPublicationMidd,
  getIdPublicationMidd,
  getPublicationByIdInstitutionMidd,
  putPublicationMidd,
  putMidiaPublicationMidd
} from "../Middlewares/publicationMiddlewares.js";

const routesPublication = Router();

routesPublication.post("/publication", requiredToken, postPublicationMidd, upload.single('midia'), postPublication);

routesPublication.get("/publication", requiredToken, getPublicationsAll);

routesPublication.get("/publication/:id", requiredToken, getIdPublicationMidd, getPublicationById);

routesPublication.get("/publication/institution/:id_institution", getPublicationByIdInstitutionMidd, getPublicationsByIdInstitution);

routesPublication.put("/publication/:id", requiredToken, putPublicationMidd, putPublication);

routesPublication.patch("/publication/midia/:id",  requiredToken, upload.single('midia'), putMidiaPublicationMidd, putMidiaPublication);

routesPublication.delete("/publication/:id", requiredToken, getIdPublicationMidd, deletePublication);

export default routesPublication;