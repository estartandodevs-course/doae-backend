import { getDonationStatusByIdInstitution } from "../../Repositories/DonationRepository.js";

export async function sumDonationsStatusByIdInstitutionService(id_institution, status, page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const donations = await getDonationStatusByIdInstitution(id_institution,status);
		let sum = 0;
        if (donations == 0) {
            return 0;
        }
        donations.map((donation)=>{
            sum += donation.value;
        })
	} catch (e) {
		throw new Error(e.message);
	}
}