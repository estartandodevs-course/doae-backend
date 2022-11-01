import { getPostagemByIdInstituicao } from "../../Repositories/PostagemRepository.js";

export async function listPostagemByIdInstituicaoService(id_instituicao, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const postagens = await getPostagemByIdInstituicao(id_instituicao);
		const response  = postagens.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return postagens.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as postagens.");
	}
}