import { sessionAuthTokenMidd } from "../Middlewares/sessionMiddlewares.js";
import { sessionControllerAuth } from "../Controllers/SessionController.js";
import { Router } from "express";
const routesSession = Router();

routesSession.post('/login/auth', sessionAuthTokenMidd, sessionControllerAuth);

export default routesSession;