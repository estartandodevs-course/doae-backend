import { getInstituicaoById } from "../../Repositories/InstituticaoRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstituicaoByIdService(id) {
	try {
		const instituicao = await getInstituicaoById(id);
		const endereco = await getAddressByZipCode(instituicao.cep);
		return {
			...instituicao,
			rua: endereco.logradouro,
			bairro: endereco.bairro,
			cidade: endereco.localidade,
			estado: endereco.uf,
		};
	} catch (e) {
		throw new Error(e.message);
	}
}
