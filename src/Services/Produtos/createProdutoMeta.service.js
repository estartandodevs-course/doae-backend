import { createProductTarget } from "../../Repositories/ProductTargetRepository.js";
import { getTargetById } from "../../Repositories/TargetRepository.js"; 
import { v4 as uuid } from "uuid";

export async function createProdutoMetaService(
	name,
	value,
	id_meta
) {
	const id = uuid();
	const meta = await getTargetById(id_meta);
	const id_institution = meta.id_institution;
	try {
		const produto = await createProductTarget(id, name, value, id_meta, id_institution);
		return produto;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
