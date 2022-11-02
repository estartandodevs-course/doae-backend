import { sessionService } from "../Services/Auth/session.service.js";
import jwt from "jsonwebtoken";

export async function sessionControllerGoogle(req, res){
    const user = req["currentUser"];
	if (!user) {
		res.send("Usuário não encontrado!");
        return;
	}
    try {
        const instituicao = sessionService(user.email);
        res.send(instituicao);
    } catch (e) {
        res.send(e);
    }
}

export async function sessionControllerAuth(req, res){
    try {
        const instituicao = sessionService(user.email);
        const token = jwt.sign(instituicao);
        res.send(token);
    } catch (e) {
        res.send('Não foi possível fazer o login da instituição, pois ela não está devidamente cadastrada!');
    }
}