import { getMetasSuspend } from "../../Repositories/MetaRepository.js";
import { listInstituicaoByIdService } from "../Instituicoes/listInstituicaoById.service.js";

export async function listSuspendMetas(page = 1){
	const perPage = 10;
	let initPage  = (page * perPage) - perPage;
	try {
		const metas = await getMetasSuspend();
		const pagination = metas.slice(0, 10);
    const newPagination = [];

    for (let i = 0; i < pagination.length; i++) {
      /*const response  = metas.slice(initPage, (initPage + perPage));
		if (response.length > 0) {
			return response;
		} else {
			return metas.slice(0, 10);
		} */

      const instituicao = await getInstituicaoByIdService(metas.id_instituicao);
	  const percent = (current_quantity * 100) / target_value;

      const newObjectMetaFormat = {
        id: metas.id,
        name: metas.name,
        target_value: metas.value,
        current_quantity: metas.current_value,
        instituicao: instituicao.name, 
        createdAt: metas.createdAt,
        day_limit: metas.day_limit,
        percent: percent,
      };
      newPagination.push(newObjectMetaFormat);
    }
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}