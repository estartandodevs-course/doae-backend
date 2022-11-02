import { getDonationsByIdInstitution } from "../../Repositories/DonationRepository.js";

export async function listDonationsByIdInstitutionService(id_institution, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const donations = await getDonationsByIdInstitution(id_institution);
		const response  = donations.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return donations.slice(0, 10);
		}
	} catch (e) {
		throw new Error(e.message);
	}
}