import { getDonationsByIdTarget } from "../../Repositories/DonationRepository.js";

export async function listDonationsByIdTargetService(id_target, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const donations = await getDonationsByIdTarget(id_target);
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