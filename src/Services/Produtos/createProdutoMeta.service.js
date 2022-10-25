import { createProdutoMeta } from "../../Repositories/ProdutoMetaRepository.js";
import { listMetaById } from "../Metas/listMetaById.service.js"; 
import { v4 as uuid } from "uuid";

export async function createProdutoMetaService(
	name,
	value,
	id_meta
) {
	const id = uuid();
	const meta = await listMetaById(id_meta);
	const id_institution = meta.institution;
	try {
		const produto = await createProdutoMeta(id, name, value, id_meta, id_institution);
		return produto;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
