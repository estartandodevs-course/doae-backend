import { getInstitutionByIdExternal } from "../../Repositories/InstitutionRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstitutionByIdService(id) {
	try {
		const [ institution ] = await getInstitutionByIdExternal(id);
		if (institution === undefined) {
			throw new Error('Instituição não foi encontrada.')
		}
		const json = institution.toJSON();
		const endereco = await getAddressByZipCode(json.cep);
		return {
			id: json.id_external,
			verified: json.verified,
			email: json.email,
			pix: json.pix,
			agency: json.agency,
			count: json.count,
			name: json.name,
			phone: json.phone,
			cep: json.cep,
			logo: json.logo,
			description: json.description,
			cnpj: json.cnpj,
			site: json.site,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
			rua: endereco.logradouro,
			bairro: endereco.bairro,
			cidade: endereco.localidade,
			estado: endereco.uf,
		};
	} catch (e) {
		throw new Error(e.message);
	}
}
