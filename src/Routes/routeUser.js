import {
	postUser,
	getUsers,
	getUserById,
	putUser,
	deleteUserById,
} from "../Controllers/UserController.js";
import { postUserMidd, idUserMidd } from "../Middlewares/userMIddlewares.js";

import { Router } from "express";

const routesUser = Router();

routesInstitution.post("/user", postUserMidd, postUser);

routesInstitution.get("/user", getUsers);

routesInstitution.get("/user/:id", idUserMidd, getUserById );

routesInstitution.put("/user/:id", idUserMidd, putUser);

routesInstitution.delete("/user/:id", idUserMidd, deleteUserById);

export default routesUser;