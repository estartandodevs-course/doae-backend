import { updateInstituicao } from "../../Repositories/InstituticaoRepository.js";

export async function updateInstituicaoByIdService(
	id,
	nome,
	descricao,
	telefone,
	cep,
	logomarca,
	site,
	pix,
	agencia,
	conta
) {
	try {
		const instituicao = await updateInstituicao(
			id,
			nome,
			descricao,
			telefone,
			cep,
			logomarca,
			site,
			pix,
			agencia,
			conta
		);
        return instituicao;
	} catch (e) {
		throw new Error("Não foi possível atualizar a instituição.");
	}
}
