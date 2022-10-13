import { recoverMetaById } from "../../Repositories/MetaRepository.js";

export async function recoverMetaService(id) {
	try {
		const meta = await recoverMetaById(id);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível recuperar a meta. Favor verificar os dados enviados!");
	}
}