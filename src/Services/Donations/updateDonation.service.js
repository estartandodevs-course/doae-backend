import { updateDonation, getDonationById } from "../../Repositories/DonationRepository.js";
import { updateByIdCurrentQuantityService } from "../Targets/updateCurrentQuantity.service.js";
import { mailto } from "../../Libs/mailto.js";
import { sendCPmail } from "../../Funcs/send_cp_mail.js";

export async function updateStatusDonationService(id, status){
	try {
		const [ donationOld ] = await getDonationById(id);
		const donation = await updateDonation(id, status);
		if(status === true){
			await mailto("doacao_aceita", donationOld.email_giver);
			await sendCPmail(donationOld.email_giver, donationOld.value);
			if (donationOld.id_target) {
				await updateByIdCurrentQuantityService(donationOld.id_target, donationOld.value);
			}
		} else {
			await mailto("doacao_rejeitada", donationOld.email_giver);
			if(donationOld.status === true){
				if (donationOld.id_target) {
					await updateByIdCurrentQuantityService(donationOld.id_target, (donationOld.value * -1));
				}
			}
		}
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}