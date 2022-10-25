import { getInstituicoes } from "../../Repositories/InstituticaoRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function getInstitutionService(page = 1) {
	const perPage = 10;
	let initPage = page * perPage - perPage;
	try {
		const instituicoes = await getInstituicoes(id);
		const response = instituicoes.slice(initPage, initPage + perPage);
		let pagination;
		if (response.length > 0) {
			pagination = response;
		} else {
			pagination = doacoes.slice(0, 10);
		}
        const newPagination = pagination.map(async (instituicao)=>{
            const endereco = await getAddressByZipCode(instituicao.cep);
            return {
                ...instituicao,
                rua: endereco.logradouro,
                bairro: endereco.bairro,
                cidade: endereco.localidade,
                estado: endereco.uf,
            };
        })
        return newPagination;
	} catch (e) {
		throw new Error("Não foi possível buscar a instituição.");
	}
}
