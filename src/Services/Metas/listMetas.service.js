import { getAllMetas } from "../../Repositories/MetaRepository.js";

export async function listAll(page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	let content  = [];
	try {
		const metas = await getAllMetas();
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