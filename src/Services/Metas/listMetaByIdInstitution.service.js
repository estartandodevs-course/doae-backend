import { getTargetByIdInstitution } from "../../Repositories/TargetRepository.js";
import { getInstituicaoByIdExternal } from "../../Repositories/InstituticaoRepository.js";

export async function listMetasByIdInstituicao(id_institution, page = 1) {
  const perPage = 10;
  let initPage = page * perPage - perPage;
  try {
    const metas = await getTargetByIdInstitution(id_institution);
    const newPagination = [];

		let response = metas.slice(initPage, initPage + perPage);
  
		if (response.length <= 0) {
      response = metas.slice(0, 10);
    }
    
    for (let i = 0; i < response.length; i++) {
      const instituicao = await getInstituicaoByIdExternal(response[i].id_institution);
      const percent = (response[i].current_quantity * 100) / response[i].target_value;

      const newObjectMetaFormat = {
        id: response[i].id,
        name: response[i].name,
        target_value: response[i].target_value,
        current_quantity: response[i].current_quantity,
        instituicao: instituicao.nome, 
        createdAt: response[i].createdAt,
        description: response[i].description,
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