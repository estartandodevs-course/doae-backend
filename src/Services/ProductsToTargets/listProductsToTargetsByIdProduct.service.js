import { getProductsToTargetsByIdProduct } from "../../Repositories/ProductsToTargetsRepository.js";

export async function listProductsToTargetsByIdProductService(
	id_product
) {
	try {
		const relations = await getProductsToTargetsByIdProduct(id_product);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
