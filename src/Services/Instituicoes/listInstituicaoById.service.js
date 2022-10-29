import { getInstituicaoById } from "../../Repositories/InstituticaoRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstituicaoByIdService(id) {
	try {
		const [ instituicao ] = await getInstituicaoById(id);
		if (instituicao === undefined) {
			throw new Error('Instituição não foi encontrada.')
		}
		const json = instituicao.toJSON();
		const endereco = await getAddressByZipCode(json.cep);
		return {
			...json,
			rua: endereco.logradouro,
			bairro: endereco.bairro,
			cidade: endereco.localidade,
			estado: endereco.uf,
		};
	} catch (e) {
		throw new Error(e.message);
	}
}