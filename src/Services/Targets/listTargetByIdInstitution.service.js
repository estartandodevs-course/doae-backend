import { getTargetByIdInstitution } from "../../Repositories/TargetRepository.js";
import { getInstitutionByIdExternal } from "../../Repositories/InstitutionRepository.js";

export async function listTargetByIdInstitution(id_institution, page = 1) {
  const perPage = 10;
  let initPage = page * perPage - perPage;
  try {
    const targets = await getTargetsByIdInstitution(id_institution);
    const newPagination = [];

		let response = targets.slice(initPage, initPage + perPage);
  
		if (response.length <= 0) {
      response = targets.slice(0, 10);
    }
    
    for (let i = 0; i < response.length; i++) {
      const institution = await getInstitutionByIdExternal(response[i].id_institution);
      const percent = (response[i].current_quantity * 100) / response[i].target_value;

      const newObjectTargetFormat = {
        id: response[i].id,
        name: response[i].name,
        target_value: response[i].target_value,
        current_quantity: response[i].current_quantity,
        institution: institution.name, 
        createdAt: response[i].createdAt,
        description: response[i].description,
        day_limit: response[i].day_limit,
        percent: percent,
      };
      newPagination.push(newObjectTargetFormat);
    }

    return newPagination;
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
}