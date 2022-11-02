import { createProductTarget } from "../../Repositories/ProductTargetRepository.js";
import { getTargetById } from "../../Repositories/TargetRepository.js"; 
import { v4 as uuid } from "uuid";

export async function createProductTargetService(
	name,
	value,
	id_target
) {
	const id = uuid();
	const target = await getTargetById(id_target);
	const id_institution = target.id_institution;
	try {
		const product = await createProductTarget(id, name, value, id_target, id_institution);
		return product;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
