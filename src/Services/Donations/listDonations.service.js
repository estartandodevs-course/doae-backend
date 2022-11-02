import { getDonations } from "../../Repositories/DonationRepository.js";

export async function listDonationsService(page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const donations = await getDonations();
		const response  = doacoes.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return donations.slice(0, 10);
		}
	} catch (e) {
		throw new Error(e.message);
	}
}