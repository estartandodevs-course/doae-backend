import { getInstitutionById } from "../../Repositories/InstitutionRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstitutionByIdService(id) {
	try {
		const [ institution ] = await getInstitutionById(id);
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
			street: endereco.logradouro,
			neighborhood: endereco.bairro,
			city: endereco.localidade,
			state: endereco.uf,
		};
	} catch (e) {
		throw new Error(e.message);
	}
}
