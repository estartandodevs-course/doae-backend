import { getTargetById } from "../../Repositories/TargetRepository.js";
import { getInstitutionById } from "../../Repositories/InstitutionRepository.js";

export async function listTargetById(id) {
	try {
		const target = await getTargetById(id);
        const [ institution ] = await getInstitutionById(target.id_institution);
        const percent = (target.current_quantity * 100) / target.target_value;
        const newObjectTargetFormat = {
            "id": target.id,
            "name": target.name,
            "target_value": target.target_value,
            "current_quantity": target.current_quantity,
            "institution": institution.id_external,
            "createdAt": target.createdAt,
            "day_limit": target.day_limit,
            "percent": `${percent}%`,
            "description": target.description
        }
		return newObjectTargetFormat;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}