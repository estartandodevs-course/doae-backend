import { getDonations } from "../../Repositories/DonationRepository.js";

export async function sumDonationsService(){
	try {
		const donations = await getDonations();
        let sum = 0;
        donations.map((donation)=>{
            if (donation.status === true) {
                sum += donation.value;
            }
        })
        return sum;
	} catch (e) {
		throw new Error(e.message);
	}
}