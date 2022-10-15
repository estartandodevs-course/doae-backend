import { getProductMetaById } from "../../Repositories/ProductMetaRepository.js";

export async function listProductByIdService(id) {
	try {
		const product = await getProductMetaById(id);
		return product;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar o produto.");
	}
}