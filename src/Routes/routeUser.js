import {
	postUser,
	getUsers,
	getUserById,
	putUser,
	deleteUserById,
} from "../Controllers/UserController.js";

import { Router } from "express";

const routesUser = Router();

routesInstitution.post("/user",  postUser);

routesInstitution.get("/users", getUsers);

routesInstitution.get("/user/:id", getUserById );

routesInstitution.put("/user/:id", putUser);

routesInstitution.delete("/user/:id", deleteUserById );

export default routesUser;