import { sessionService } from "../Services/Auth/session.service.js";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export async function sessionControllerAuth(req, res){
    const { email, password } = req.body;
    try {
        const institution = await sessionService(email, password);
        const token = jwt.sign(institution, secret);
        res.status(200).send(token);
    } catch (e) {
        res.status(403).send('Não foi possível fazer o login da instituição, pois ela não está devidamente cadastrada!');
    }
}