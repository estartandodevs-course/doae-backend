import { sessionService } from "../Services/Auth/session.service.js";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export async function sessionControllerGoogle(req, res){
    const user = req["currentUser"];
	if (!user) {
		res.send("Usuário não encontrado!");
        return;
	}
    try {
        const institution = sessionService(user.email);
        res.send(institution);
    } catch (e) {
        res.send(e);
    }
}

export async function sessionControllerAuth(req, res){
    const { email, password } = req.params;
    try {
        const institution = await sessionService(email, password);
        const token = jwt.sign(institution, secret);
        res.send(token);
    } catch (e) {
        res.send('Não foi possível fazer o login da instituição, pois ela não está devidamente cadastrada!');
    }
}