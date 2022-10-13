import { getMetasByIdInstitution } from "../../Repositories/MetaRepository.js";

export async function listMetasByIdInstitution(id_institution, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	let content  = [];
	try {
		const metas = await getMetasByIdInstitution(id_institution);
		for (let i = initPage; i < (initPage + perPage); i++) {
			if (metas[i]) {
				content.push(metas[i]);
			}
		}
		if (content.length > 0) {
			return content;
		} else {
			return metas.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}