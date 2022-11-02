import { createPostagem } from "../../Repositories/PostagemRepository.js";
import { v4 as uuid } from "uuid";

export async function createPostagemService(
	descricao,
	id_instituicao
) {
	const id = uuid();
	try {
		const postagem = await createPostagem(id, urlLogo, descricao, id_instituicao);
		return postagem;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível criar a postagem. Favor verifique os parametros!");
	}
}
