import { deleteProductsToTargetsById } from "../../Repositories/ProductsToTargetsRepository.js";

export async function deleteProductsToTargetsService(
	id
) {
	try {
		const relations = await deleteProductsToTargetsById(id);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
