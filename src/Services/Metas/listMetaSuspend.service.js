import { getMetasSuspend } from "../../Repositories/MetaRepository.js";

export async function listSuspendMetas(){
	try {
		const metas = await getMetasSuspend();
		return metas;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}