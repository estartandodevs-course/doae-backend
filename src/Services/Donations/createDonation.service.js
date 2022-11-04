import { createDonation } from "../../Repositories/DonationRepository.js";
import { getTargetById } from "../../Repositories/TargetRepository.js";
import { getProductTargetById } from "../../Repositories/ProductTargetRepository.js";
import { updateByIdCurrentQuantityService } from "../Targets/updateCurrentQuantity.service.js";
import { v4 as uuid } from "uuid";
import { mailto } from "../../Libs/mailto.js";

export async function createDonationService(
	id_institution,
	value,
	email_giver,
	id_target,
	id_product
) {
	const id = uuid();
	const status = undefined;
	const suspend = false;
	if (id_product) {
		const product = await getProductTargetById(id_product)
		value = product.value;
	}
	if(id_target){
		const target = await getTargetById(id_target);
		if(!target){
			throw new Error('Não foi possível encontrar essa meta associada.')
		}
		const dateNow = new Date(); 
		if(dateNow > target.day_limit){
			throw new Error("Essa meta já encerrou.");
		}
		try {
			await updateByIdCurrentQuantityService(id_target, value);
		} catch (e) {
			throw new Error('Não possível salvar a doação.')
		}
	}
	try {
		const donation = await createDonation(
			id,
			id_institution,
			status,
			value,
			email_giver,
			id_target,
			suspend
		);
		await mailto("doacao_realizada", email_giver);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}
