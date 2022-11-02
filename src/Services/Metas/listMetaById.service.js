import { getMetaById } from "../../Repositories/MetaRepository.js";
import { getInstituicaoByIdExternal } from "../../Repositories/InstituticaoRepository.js";

export async function listMetaById(id) {
	try {
		const meta = await getMetaById(id);
        const [ institution ] = await getInstituicaoByIdExternal(meta.id_institution);
        const percent = (meta.current_quantity * 100) / meta.target_value;
        const newObjectMetaFormat = {
            "id": meta.id,
            "name": meta.name,
            "target_value": meta.target_value,
            "current_quantity": meta.current_quantity,
            "institution": institution.nome,
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