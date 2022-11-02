import { getDonationById } from "../../Repositories/DonationRepository.js";

export async function listDonationByIdService(id){
	try {
		const donation = await getDonationById(id);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}