import { getProdutoMetasByIdMeta } from "../../Repositories/ProdutoMetaRepository.js";

export async function listProdutoByIdMetaService(id_meta, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const produtos = await getProdutoMetasByIdMeta(id_meta);
		const response  = produtos.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return produtos.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar os produtos.");
	}
}
