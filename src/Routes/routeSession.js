import { sessionAuthTokenMidd } from "../Middlewares/sessionMiddlewares.js";
import { sessionControllerAuth } from "../Controllers/SessionController.js";
import { Router } from "express";
const routesSession = Router();

routesSession.get('/login/auth/oatuh2/:email/:password', sessionAuthTokenMidd, sessionControllerAuth);

export default routesSession;