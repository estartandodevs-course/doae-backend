import { deleteMetaById } from "../../Repositories/MetaRepository.js";

export async function deleteMetaService(id) {
	try {
		const meta = await deleteMetaById(id);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível excluir a meta. Favor verificar os dados enviados!");
	}
}