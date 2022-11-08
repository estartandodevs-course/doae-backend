import { getProductsToTargetsByIdTarget } from "../../Repositories/ProductsToTargetsRepository.js";

export async function listProductsToTargetsByIdTargetService(
	id_target
) {
	try {
		const relations = await getProductsToTargetsByIdTarget(id_target);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
