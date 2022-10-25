import InstituicaoModel from "../Models/InstituicaoModel.js";

export async function createInstituicao(
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
	logomarca,
	site,
	verificado
) {
	try {
		const instituicao = await InstituicaoModel.create({
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
			logomarca,
			site,
			verificado,
		});
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getInstituicoes() {
	try {
		const instituicoes = await InstituicaoModel.findAll({
			where: {
				suspend: false,
			},
		});
		return instituicoes;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getInstituicaoById(id) {
	try {
		const instituicao = await InstituicaoModel.findAll({
			where: {
				id: id,
				suspend: false,
			},
		});
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getInstituicaoByIdExternal(identificador) {
	try {
		const instituicao = await InstituicaoModel.findAll({
			where: {
				identificador: identificador,
				suspend: false,
			},
		});
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateInstituicao(
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
		const instituicao = await InstituicaoModel.update(
			{
				where: {
					id: id,
				},
			},
			{
				nome,
				descricao,
				telefone,
				cep,
				logomarca,
				site,
				pix,
				agencia,
				conta,
			}
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteInstituicao(id) {
	try {
		const instituicao = await InstituicaoModel.update(
			{
				where: {
					id: id,
				},
			},
			{
				suspend: true,
			}
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}
