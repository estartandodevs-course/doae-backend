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

routesPublication.post("/publication", postPublicationMidd, upload.single('midia'), postPublication);

routesPublication.get("/publication", getPublicationsAll);

routesPublication.get("/publication/:id", getIdPublicationMidd, getPublicationById);

routesPublication.get("/publication/institution/:id_institution", getPublicationByIdInstitutionMidd, getPublicationsByIdInstitution);

routesPublication.put("/publication/:id", putPublicationMidd, putPublication);

routesPublication.patch("/publication/midia/:id",  upload.single('midia'), putMidiaPublicationMidd, putMidiaPublication);

routesPublication.delete("/publication/:id", getIdPublicationMidd, deletePublication);

export default routesPublication;