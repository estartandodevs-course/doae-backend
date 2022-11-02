import { deleteDonation } from "../../Repositories/DonationRepository.js";

export async function deleteDonationService(id){
	try {
		const donation = await deleteDonation(id);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}