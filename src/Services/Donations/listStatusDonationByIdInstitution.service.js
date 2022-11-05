import { getDonationAcceptedByIdInstitution, getDonationRejectedByIdInstitution } from "../../Repositories/DonationRepository.js";

export async function listStatusDonationsByIdInstitutionService(id_institution, status, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
        let donations;
        if(status === true){
            donations = await getDonationAcceptedByIdInstitution(id_institution);
        } else {
            donations = await getDonationRejectedByIdInstitution(id_institution);
        }
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