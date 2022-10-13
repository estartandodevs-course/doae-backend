import { getProductMetasByIdMeta } from "../../Repositories/ProductMetaRepository.js";

export async function listProductByIdMetaService(id_meta, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	let content  = [];
	try {
		const products = await getProductMetasByIdMeta(id_meta);
		for (let i = initPage; i < (initPage + perPage); i++) {
			if (products[i]) {
				content.push(products[i]);
			}
		}
		if (content.length > 0) {
			return content;
		} else {
			return products;
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar os produtos.");
	}
}
