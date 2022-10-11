import { getProductMetaById } from "../../Repositories/ProductMetaRepository.js";

export async function listProductByIdService(id) {
	try {
		const product = await getProductMetaById(id_meta);
		return product;
	} catch (e) {
		console.log(e);
		return "Não foi possível buscar o produto.";
	}
}