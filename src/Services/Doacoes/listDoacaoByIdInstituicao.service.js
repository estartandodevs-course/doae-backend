import { getDoacoesByIdInstituicao } from "../../Repositories/DoacaoRepository.js";

export async function listDoacaoByIdInstituicaoService(id_instituicao, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const doacoes = await getDoacoesByIdInstituicao(id_instituicao);
		const response  = doacoes.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return doacoes.slice(0, 10);
		}
	} catch (e) {
		throw new Error(e.message);
	}
}