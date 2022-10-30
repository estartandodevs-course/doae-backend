import DoacaoModel from "../Models/DoacaoModel.js";

export async function createDoacao(
	id,
	id_institution,
	status,
	value,
	email_doador,
	id_meta,
	suspend
) {
	try {
		const doacao = await DoacaoModel.create({
			id,
			id_institution,
			status,
			value,
			email_doador,
			id_meta,
			suspend,
		});
		return doacao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDoacoes() {
	try {
		const doacoes = await DoacaoModel.findAll({});
		return doacoes;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDoacaoById(id) {
	try {
		const doacao = await DoacaoModel.findAll({
			where: {
				id: id,
			},
		});
		return doacao;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDoacoesByIdMeta(id_meta) {
	try {
		const doacoes = await DoacaoModel.findAll({
			where: {
				id_meta: id_meta,
			},
		});
		return doacoes;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDoacoesByIdInstituicao(id_institution) {
	try {
		const doacoes = await DoacaoModel.findAll({
			where: {
				id_institution: id_institution,
			},
		});
		return doacoes;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateDoacao(id, status) {
	try {
		const doacoes = await DoacaoModel.update(
			{
				status: status,
			},
			{
				where: {
					id: id,
				},
			},
		);
		return doacoes;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteDoacao(id) {
	try {
		const doacoes = await DoacaoModel.update(
			{
				suspend: true,
			},
			{
				where: {
					id: id,
				},
			},
		);
		return doacoes;
	} catch (e) {
		throw new Error(e.message);
	}
}
