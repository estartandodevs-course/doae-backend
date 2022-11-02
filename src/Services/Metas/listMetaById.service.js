import { getMetaById } from "../../Repositories/MetaRepository.js";
import { listInstituicaoByIdService } from "../Instituicoes/listInstituicaoById.service.js";

export async function listMetaById(id) {
	try {
		const meta = await getMetaById(id);
        const institution = await listInstituicaoByIdService(meta.id_institution);
        const percent = (meta.current_quantity * 100) / meta.target_value;
        const newObjectMetaFormat = {
            "id": meta.id,
            "name": meta.name,
            "target_value": meta.target_value,
            "current_quantity": meta.current_quantity,
            "institution": institution.name,
            "createdAt": meta.createdAt,
            "day_limit": meta.day_limit,
            "percent": percent,
            "description": meta.description
        }
		return newObjectMetaFormat;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}