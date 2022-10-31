import { getPostagemById } from "../../Repositories/PostagemRepository.js";

export async function listPostagemByIdService(id) {
	try {
		const postagem = await getPostagemById(id);
		return postagem;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar a postagem.");
	}
}