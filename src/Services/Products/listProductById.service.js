import { getProductById } from "../../Repositories/ProductRepository.js";

export async function listProductByIdService(id) {
	try {
		const product = await getProductById(id);
		return product;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}