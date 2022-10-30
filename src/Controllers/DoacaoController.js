import { createDoacaoService } from "../Services/Doacoes/createDoacao.service.js";
import { deleteDoacaoService } from "../Services/Doacoes/deleteDoacao.service.js";
import { listDoacaoService } from "../Services/Doacoes/listDoacao.service.js";
import { listDoacaoByIdService } from "../Services/Doacoes/listDoacaoById.service.js";
import { listDoacaoByIdInstituicaoService } from "../Services/Doacoes/listDoacaoByIdInstituicao.service.js";
import { listDoacoesByIdMetaService } from "../Services/Doacoes/listDoacaoByIdMeta.service.js";
import { updateStatusDoacaoService } from "../Services/Doacoes/updateDoacao.service.js";

//cria doacao
export async function postDoacao(request, response) {
	const {
		id_institution,
		value,
		email_doador,
		id_meta,
	} = request.body;
	try {
		const doacao = await createDoacaoService(
			id_institution,
			value,
			email_doador,
			id_meta,
		);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//lista todas
export async function getDoacao(request, response) {
	const { page } = request.query;
	try {
		const doacao = await listDoacaoService(page);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//lista por id
export async function getDoacaoById(request, response) {
	const { id } = request.params;
	try {
		const doacao = await listDoacaoByIdService(id);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//lista por id da instituição
export async function getDoacaoByIdInstituicao(request, response) {
	const { id_institution } = request.params;
	try {
		const doacao = await listDoacaoByIdInstituicaoService(id_institution);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//lista por id da meta
export async function getDoacaoByIdMeta(request, response) {
	const { id_meta } = request.params;
	try {
		const doacao = await listDoacoesByIdMetaService(id_meta);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//ataualiza doação
export async function putDoacao(request, response) {
	const { id } = request.params;
	const { status } = request.body;
	try {
		const doacao = await updateStatusDoacaoService(id, status);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

//deleta doacao
export async function deleteDoacao(request, response) {
	const { id } = request.params;
	try {
		const doacao = await deleteDoacaoService(id);
		response.status(200).json(doacao);
	} catch (e) {
		response.status(400).json(e.message);
	}
}