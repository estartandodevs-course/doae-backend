import { getAllMetas } from "../../Repositories/MetaRepository.js";
import { listInstituicaoByIdService } from "../Instituicoes/listInstituicaoById.service.js";
import { filterMetasByNameOfInstitution } from "../../Funcs/filterMetasByName.js";

export async function listAllWithFilters(page = 1, query) {
    const perPage = 10;

	let initPage = page * perPage - perPage;

	try {
        const metas = await getAllMetas();

        const newMetas = [];

        for (let i = 0; i < metas.length; i++) {
            const arr_bool = filterMetasByNameOfInstituicao(query, metas.name);
            const words = query.length;
            let trues;
            arr_bool.map((item)=>{
                if(item === "true"){
                    trues++;
                }
            })
            const percents = (trues * 100) / words;
            if(percents === 100){
                newMetas.splice(0, 0, metas[i]);
            } else if (percents < 100 && percents >= 75) {
                newMetas.splice(1, 0, metas[i]);
            } else if (percents < 75 && percents >= 50) {
                newMetas.splice(2, 0, metas[i]);
            } else if (percents < 50 && percents >= 25) {
                newMetas.splice(3, 0, metas[i]);
            } else if (percents < 25 && percents > 0) {
                newMetas.splice(4, 0, metas[i]);
            } else {
                return;
            }
        }

        const newPagination = [];

		let response = newMetas.slice(initPage, initPage + perPage);
  
		if (response.length <= 0) {
            response = metas.slice(0, 10);
        }
        
        for (let i = 0; i < response.length; i++) {
            const instituicao = await getInstituicaoByIdService(response[i].id_institution);
            const percent = (response[i].current_quantity * 100) / response[i].target_value;

            const newObjectMetaFormat = {
                id: response[i].id,
                name: response[i].name,
                target_value: response[i].value,
                current_quantity: response[i].current_value,
                instituicao: instituicao.name, 
                createdAt: response[i].createdAt,
                day_limit: response[i].day_limit,
                percent: percent,
            };
            newPagination.push(newObjectMetaFormat);
        }

        return newPagination;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
}
