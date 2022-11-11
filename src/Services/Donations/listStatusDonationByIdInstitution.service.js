import { getDonationStatusByIdInstitution } from "../../Repositories/DonationRepository.js";

export async function listStatusDonationsByIdInstitutionService(id_institution, status, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const donations = await getDonationStatusByIdInstitution(id_institution,status);
		const response  = donations.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return donations.slice(donations.length - 10, 10);
		}
	} catch (e) {
		throw new Error(e.message);
	}
}