import { updateDonation } from "../../Repositories/DonationRepository.js";

export async function updateStatusDonationService(id, status){
	try {
		const donation = await updateDonation(id, status);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}