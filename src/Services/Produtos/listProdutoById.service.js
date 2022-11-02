import { getProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function listProdutoByIdService(id) {
	try {
		const produto = await getProductTargetById(id);
		return produto;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}