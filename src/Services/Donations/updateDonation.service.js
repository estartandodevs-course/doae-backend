import { updateDonation } from "../../Repositories/DonationRepository.js";
import { mailto } from "../../Libs/mailto.js";

export async function updateStatusDonationService(id, status){
	try {
		const donation = await updateDonation(id, status);
		if(status === true){
			await mailto("doacao_aceita", email_giver);
		} else {
			await mailto("doacao_rejeitada", email_giver);
		}
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}