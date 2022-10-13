import { getProductMetasByIdMeta } from "../../Repositories/ProductMetaRepository.js";

export async function listProductByIdMetaService(id_meta, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const products = await getProductMetasByIdMeta(id_meta);
		const response  = products.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return products.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar os produtos.");
	}
}
