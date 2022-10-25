import { getAllMetas } from "../../Repositories/MetaRepository.js";
import { getInstitutionByIdService } from "../Instituicoes/getInstituicaoById.service.js";

export async function listAll(page = 1, query = "") {
	const perPage = 10;

	let initPage = page * perPage - perPage;

	try {
		const metas = await getAllMetas();
		const newPagination = [];

		let response = metas.slice(initPage, initPage + perPage);
  
		if (response.length <= 0) {
      response = metas.slice(0, 10);
    }
    
    for (let i = 0; i < response.length; i++) {
      const institution = await getInstitutionByIdService(response[i].id_institution);
      const percent = (response[i].current_quantity * 100) / response[i].target_value;

      const newObjectMetaFormat = {
        id: response[i].id,
        name: response[i].name,
        target_value: response[i].value,
        current_quantity: response[i].current_value,
        institution: institution.name, 
        createdAt: response[i].createdAt,
        day_limit: response[i].day_limit,
        percent: percent,
      };
      newPagination.push(newObjectMetaFormat);
    }

    return newPagination;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar as metas.");
	}
}
