import { createProduct } from "../../Repositories/ProductRepository.js";
import { v4 as uuid } from "uuid";

export async function createProductService(
	name,
	value,
	id_target,
	id_institution
) {
	const id = uuid();
	try {
		const product = await createProduct(id, name, value, id_target, id_institution);
		return product;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
