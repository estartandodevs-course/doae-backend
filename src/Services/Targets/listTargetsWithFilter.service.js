import { getAllTargets } from "../../Repositories/TargetRepository.js";
import { listInstitutionByIdService } from "../Institutions/listInstitutionById.service.js";
import { filterTargetsByNameOfInstitution } from "../../Funcs/filterTargetsByName.js";

export async function listAllWithFilters(page = 1, query) {
    const perPage = 10;

	let initPage = page * perPage - perPage;

	try {
        const targets = await getAllTargets();

        const newTargets = [];

        for (let i = 0; i < targets.length; i++) {
            const arr_bool = filterTargetsByNameOfInstitution(query, targets.name);
            const words = query.length;
            let trues;
            arr_bool.map((item)=>{
                if(item === "true"){
                    trues++;
                }
            })
            const percents = (trues * 100) / words;
            if(percents === 100){
                newTargets.splice(0, 0, targets[i]);
            } else if (percents < 100 && percents >= 75) {
                newTargets.splice(1, 0, targets[i]);
            } else if (percents < 75 && percents >= 50) {
                newTargets.splice(2, 0, targets[i]);
            } else if (percents < 50 && percents >= 25) {
                newTargets.splice(3, 0, targets[i]);
            } else if (percents < 25 && percents > 0) {
                newTargets.splice(4, 0, targets[i]);
            } else {
                return;
            }
        }

        const newPagination = [];

		let response = newTargets.slice(initPage, initPage + perPage);
  
		if (response.length <= 0) {
            response = targets.slice(0, 10);
        }
        
        for (let i = 0; i < response.length; i++) {
            const institution = await listInstitutionByIdService(response[i].id_institution);
            const percent = (response[i].current_quantity * 100) / response[i].target_value;

            const newObjectTargetFormat = {
                id: response[i].id,
                name: response[i].name,
                target_value: response[i].value,
                current_quantity: response[i].current_value,
                institution: institution.name, 
                createdAt: response[i].createdAt,
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
