import { getProductsToTargetsByIdTargetAndProduct } from "../../Repositories/ProductsToTargetsRepository.js";

export async function listProductsToTargetsByIdTargetAndProductService(
	id_target,
    id_product
) {
	try {
		const relations = await getProductsToTargetsByIdTargetAndProduct(id_target, id_product);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
