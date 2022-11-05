import { deleteDonation, getDonationById } from "../../Repositories/DonationRepository.js";
import { updateByIdCurrentQuantityService } from "../Targets/updateCurrentQuantity.service.js";

export async function deleteDonationService(id){
	try {
		const [ donationOld ] = await getDonationById(id);
		const newValue = donationOld.value * -1;
		if(donationOld.id_target && donationOld.status === true){
			await updateByIdCurrentQuantityService(donationOld.id_target, newValue);
		}
		const donation = await deleteDonation(id);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}