import { sessionService } from "../Services/Auth/session.service.js";

export async function sessionController(req, res){
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