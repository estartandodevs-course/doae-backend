import { getProductMetasByIdMeta } from "../../Repositories/ProductMetaRepository.js";

export async function listProductByIdMetaService(id_meta) {
	try {
		const products = await getProductMetasByIdMeta(id_meta);
		return products;
	} catch (e) {
		console.log(e);
		return "Não foi possível buscar os produtos.";
	}
}
