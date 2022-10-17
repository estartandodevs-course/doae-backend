import { getDoacoesByIdMeta } from "../../Repositories/DoacaoRepository.js";

export async function getDoacoesByIdMetaService(id_meta, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const doacoes = await getDoacoesByIdMeta(id_meta);
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