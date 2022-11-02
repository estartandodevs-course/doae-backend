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
	site,
	verificado,
	suspend,
	email,
	password
) {
	try {
		const instituicao = await InstituicaoModel.create({
			id,
			nome,
			email,
			password,
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

export async function getInstituicaoByEmail(email) {
	try {
		const instituicao = await InstituicaoModel.findAll({
			where: {
				email: email,
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
	site,
	pix,
	agencia,
	conta
) {
	try {
		const instituicao = await InstituicaoModel.update(
			{
				nome,
				descricao,
				telefone,
				cep,
				site,
				pix,
				agencia,
				conta,
			},
			{
				where: {
					id: id,
				},
			}
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateInstituicaoFoto(id, logomarca) {
	try {
		const instituicao = await InstituicaoModel.update(
			{
				logomarca,
			},
			{
				where: {
					id: id,
				},
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
				suspend: true,
			},
			{
				where: {
					id: id,
				},
			}
		);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}
