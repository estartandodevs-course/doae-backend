import { getMetasByIdInstitution } from "../../Repositories/MetaRepository.js";

export async function listMetasByIdInstitution(id_institution, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const metas = await getMetasByIdInstitution(id_institution);
		const response  = metas.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return metas.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}