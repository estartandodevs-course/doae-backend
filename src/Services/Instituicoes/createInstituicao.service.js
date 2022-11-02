import { createInstituicao } from "../../Repositories/InstituticaoRepository.js";
import { v4 as uuid } from "uuid";
import shortid from "shortid";

export async function createInstituicaoService(
	nome,
	cnpj,
	descricao,
	agencia,
	conta,
	pix,
	telefone,
	cep,
	site,
	email,
	password,
	verificado = false,
) {
	const id = uuid();
	const identificador = shortid();
	const suspend = false;
	try {
		const instituicao = await createInstituicao(
            id,
            nome,
            cnpj,
            descricao,
            agencia,
            conta,
            pix,
            telefone,
            cep,
            identificador,
            site,
            verificado,
			suspend,
			email,
			password
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}
