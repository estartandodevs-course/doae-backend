import { createPostagem } from "../../Repositories/PostagemRepository.js";
import { listInstituicaoById } from "../Metas/listInstituicaoById.service.js"; 
import { v4 as uuid } from "uuid";

export async function createPostagemService(
	midia,
	descricao,
	id_instituicao
) {
	const id = uuid();
	const instituicao = await listInstituicaoById(id_instituicao);
	try {
		const postagem = await createPostagem(id, midia, descricao, id_instituicao);
		return postagem;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível criar a postagem. Favor verifique os parametros!");
	}
}
