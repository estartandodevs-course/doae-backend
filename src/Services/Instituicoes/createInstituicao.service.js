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
			suspend
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}
