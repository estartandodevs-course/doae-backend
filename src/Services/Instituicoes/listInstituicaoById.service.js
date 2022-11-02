import { getInstituicaoByIdExternal } from "../../Repositories/InstituticaoRepository.js";
import { getAddressByZipCode } from "../../Funcs/getAddressByZipCode.js";

export async function listInstituicaoByIdService(id) {
	try {
		const [ instituicao ] = await getInstituicaoByIdExternal(id);
		if (instituicao === undefined) {
			throw new Error('Instituição não foi encontrada.')
		}
		const json = instituicao.toJSON();
		const endereco = await getAddressByZipCode(json.cep);
		return {
			id: json.identificador,
			verificado: json.verificado,
			email: json.email,
			pix: json.pix,
			agencia: json.agencia,
			conta: json.conta,
			nome: json.nome,
			telefone: json.telefone,
			cep: json.cep,
			logomarca: json.logomarca,
			descricao: json.descricao,
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
