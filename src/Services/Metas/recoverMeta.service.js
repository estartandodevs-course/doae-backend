import { recoverMetaById } from "../../Repositories/MetaRepository.js";

export async function recoverMetaService(id) {
	try {
		const meta = await recoverMetaById(id);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}