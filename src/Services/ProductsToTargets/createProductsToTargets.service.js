import {
	createProductsToTargets,
	getProductsToTargetsByIdTarget,
} from "../../Repositories/ProductsToTargetsRepository.js";
import { v4 as uuid } from "uuid";

export async function createProductsToTargetsService(id_target, id_product) {
	const id = uuid();
	try {
		const products = await getProductsToTargetsByIdTarget(id_target);
		if (products.length > 10) {
			throw new Error("Essa meta ja atingiu o máximo de produtos.");
		}
		const relations = await createProductsToTargets(id, id_target, id_product);
		return relations;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
