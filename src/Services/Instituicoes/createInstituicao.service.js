import { createInstituicao } from "../../Repositories/InstituticaoRepository.js";
import { v4 as uuid } from "uuid";
import shortid from "shortid";
import { uploadImage } from "../../Libs/uploadCloud.js";

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
    logomarca,
	verificado = false
) {
    const logoImage = await uploadImage(logomarca);
    const urlLogo = logoImage.url;
	const id = uuid();
	const identificador = shortid();
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
            urlLogo,
            site,
            verificado
		);
		return instituicao;
	} catch (e) {
		throw new Error("Não foi possível criar a instituição.");
	}
}
