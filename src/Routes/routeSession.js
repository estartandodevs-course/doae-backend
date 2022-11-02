import { sessionMidd } from "../Middlewares/sessionMiddlewares.js";
import { sessionController } from "../Controllers/sessionController.js";
import { Router } from "express";
const routesSession = Router();

routesSession.get('/login/auth/oatuh2/:email', sessionController);