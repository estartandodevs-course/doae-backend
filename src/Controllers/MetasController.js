import { createMetaService } from "../Services/Metas/createMeta.service.js";
import { listAll } from "../Services/Metas/listMetas.service.js";
import { listMetaById } from "../Services/Metas/listMetaById.service.js";
import { listMetasByIdInstitution } from "../Services/Metas/listMetaByIdInstitution.service.js";
import { updateMetaService } from "../Services/Metas/updateMeta.service.js";
import { updateByIdCurrentQuantityService } from "../Services/Metas/updateCurrentQuantity.service.js";
import { deleteMetaService } from "../Services/Metas/deleteMeta.service.js";

export async function postMeta(request, response) {
	const { name, value, id_institution } = request.body;
	try {
		const meta = await createMetaService(name, value, id_institution);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getMetas(request, response) {
	try {
		const meta = await listAll();
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getMetaById(request, response) {
	const { id } = request.params;
	try {
		const meta = await listMetaById(id);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getMetaByIdInstitution(request, response) {
	const { id_institution } = request.params;
	console.log(id_institution);
	try {
		const meta = await listMetasByIdInstitution(id_institution);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putMeta(request, response) {
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const meta = await updateMetaService(id, name, value);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putCurrentQuantity(request, response) {
	const { id } = request.params;
	const { value, productId } = req.body;
	try {
		const meta = await updateByIdCurrentQuantityService(id, value, productId);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteMeta(request, response) {
	const { id } = request.params;
	try {
		const meta = await deleteMetaService(id);
		response.status(200).json(meta);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
