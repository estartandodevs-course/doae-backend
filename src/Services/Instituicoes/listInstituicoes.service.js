import { getInstituicoes } from "../../Repositories/InstituticaoRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstituicaoService(page = 1) {
	const perPage = 10;
	let initPage = page * perPage - perPage;
	try {
		const instituicoesInString = await getInstituicoes();
		const instituicoes = [];
		instituicoesInString.map((inst)=>{
			const json = inst.toJSON();
			instituicoes.push(json);
		})
		const response = instituicoes.slice(initPage, initPage + perPage);
		let pagination;
		if (response.length > 0) {
			pagination = response;
		} else {
			pagination = doacoes.slice(0, 10);
		}

        const newPagination = [];
		
		for (let i = 0; i < pagination.length; i++) {
			const endereco = await getAddressByZipCode(pagination[i].cep);
            const newInst = {
                ...pagination[i],
                rua: endereco.logradouro,
                bairro: endereco.bairro,
                cidade: endereco.localidade,
                estado: endereco.uf,
            };
			newPagination.push(newInst);
		}
        return newPagination;
	} catch (e) {
		throw new Error(e.message);
	}
}
