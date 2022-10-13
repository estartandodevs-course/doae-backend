import { getAllMetas } from "../../Repositories/MetaRepository.js";

export async function listAll(){
	try {
		const metas = await getAllMetas();
		return metas;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}