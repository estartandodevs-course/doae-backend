import { getProductsByIdInstitution } from "../../Repositories/ProductRepository.js";

export async function listProductByIdInstitutionService(id_institution, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const products = await getProductsByIdInstitution(id_institution);
		const response  = products.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return products.slice(products.length - 10, 10);
		}
	} catch (e) {
		throw new Error(e.message);
	}
}