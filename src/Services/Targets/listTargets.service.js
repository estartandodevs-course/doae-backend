import { getAllTargets } from "../../Repositories/TargetRepository.js";
import { getInstitutionByIdExternal } from "../../Repositories/InstitutionRepository.js";

export async function listAll(page = 1, query = "") {
	const perPage = 10;

	let initPage = page * perPage - perPage;

	try {
		const targets = await getAllTargets();
		const newPagination = [];

		let response = targets.slice(initPage, initPage + perPage);
    console.log(response)
		if (response.length <= 0) {
      response = targets.slice(targets.length - 10, 10);
    }

    if (response.length == 0) {
      return [];
    }
    
    for (let i = 0; i < response.length; i++) {
      const [ institution ] = await getInstitutionByIdExternal(response[i].id_institution);
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
