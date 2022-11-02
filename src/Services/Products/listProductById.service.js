import { getProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function listProductByIdService(id) {
	try {
		const product = await getProductTargetById(id);
		return product;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}