import { getInstitutions } from "../../Repositories/InstitutionRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstitutionsService(page = 1) {
	const perPage = 10;
	let initPage = page * perPage - perPage;
	try {
		const institutionsInString = await getInstitutions();
		const institutions = [];
		institutionsInString.map((inst)=>{
			const json = inst.toJSON();
			institutions.push(json);
		})
		const response = institutions.slice(initPage, initPage + perPage);
		let pagination;
		if (response.length > 0) {
			pagination = response;
		} else {
			pagination = response.slice(0, 10);
		}

        const newPagination = [];
		
		for (let i = 0; i < pagination.length; i++) {
			const endereco = await getAddressByZipCode(pagination[i].cep);
            const newInst = {
                id: pagination[i].id_external,
				name: pagination[i].name,
				verified: pagination[i].verified,
				pix: pagination[i].pix,
				agency: pagination[i].agency,
				count: pagination[i].count,
				site: pagination[i].site,
				description: pagination[i].description,
				logo: pagination[i].logo,
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
