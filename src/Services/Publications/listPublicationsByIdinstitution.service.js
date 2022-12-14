import { getPublicationsByIdInstitution } from "../../Repositories/PublicationRepository.js";

export async function listPublicationsByIdInstitutionService(id_institution, page = 1) {
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const publications = await getPublicationsByIdInstitution(id_institution);
		const response = publications.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return publications.slice(publications.length - 10, 10);
		}
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as postagens.");
	}
}