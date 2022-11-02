import { updateInstitution } from "../../Repositories/InstitutionRepository.js";

export async function updateInstitutionByIdService(
	id,
	name,
	description,
	phone,
	cep,
	site,
	pix,
	agency,
	count
) {
	try {
		const institution = await updateInstitution(
			id,
			name,
			description,
			phone,
			cep,
			site,
			pix,
			agency,
			count
		);
        return institution;
	} catch (e) {
		throw new Error(e.message);
	}
}
