import { getProductTargetByIdMeta } from "../../Repositories/ProductTargetRepository.js";

export async function listProductsByIdTargetService(id_target, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const products = await getProductTargetByIdTarget(id_target);
		const response  = products.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return products.slice(0, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
