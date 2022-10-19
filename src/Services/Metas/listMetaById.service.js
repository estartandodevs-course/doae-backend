import { getMetaById } from "../../Repositories/MetaRepository.js";

export async function listMetaById(id) {
	try {
		const meta = await getMetaById(id);
		//vai ficar aqui o código
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar a meta.");
	}
}

/* 
    meta = {
        "_id": "634758c5622a165dcd49909c",
        "id": "7d86a124-90b0-44df-b4d9-e6102cab35d0",
        "name": "Meta do feijão com arroz",
        "value": 10,
        "current_quantity": 0,
        "id_institution": "mock_institution",
        "suspend": false,
        "createdAt": "2022-10-13T00:16:05.381Z",
        "updatedAt": "2022-10-13T00:16:05.381Z",
        "__v": 0
    },

    const institution = getInstitutionById(meta.id_institution);
    const percent = 75%;
    const newObjectMetaFormat = {
        "id": meta.id,
        "name": meta.name,
        "target_value": meta.value,
        "current_quantity": meta.current_value,
        "institution": institution.name,
        "createdAt": meta.createdAt,
        "day_limit": meta.day_limit,
        "percent": percent,
        "description": meta.description
    }
*/