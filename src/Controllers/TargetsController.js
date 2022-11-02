import { createTargetService } from "../Services/Targets/createTarget.service.js";
import { listAll } from "../Services/Targets/listTargets.service.js";
import { listTargetById } from "../Services/Targets/listTargetById.service.js";
import { listTargetsByIdInstitution } from "../Services/Targets/listTargetByIdInstitution.service.js";
import { updateTargetService } from "../Services/Targets/updateTarget.service.js";
import { updateByIdCurrentQuantityService } from "../Services/Targets/updateCurrentQuantity.service.js";
import { deleteTargetService } from "../Services/Targets/deleteTarget.service.js";
import { listAllWithFilters } from "../Services/Targets/listTargetsWithFilter.service.js";

export async function postTarget(request, response) {
	const { name, value, id_institution, description, day_limit } = request.body;
	try {
		const target = await createTargetService(name, value, id_institution, description, day_limit);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getTargets(request, response) {
	const { page, q } = request.query;
	try {
		if(q){
			const targets = await listAllWithFilters(page, q);
			response.status(200).json(targets);
		} else {
			const targets = await listAll(page);
			response.status(200).json(targets);
		}
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getTargetById(request, response) {
	const { id } = request.params;
	try {
		const meta = await listTargetById(id);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getTargetByIdInstitution(request, response) {
	const { page } = request.query;
	const { id_institution } = request.params;
	try {
		const target = await listTargetsByIdInstitution(id_institution, page);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getTargetFilters(request, response) {
	const { page } = request.query;
	const { id_institution } = request.params;
	try {
		const meta = await listTargetByIdInstitution(id_institution, page);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putTarget(request, response) {
	const { id } = request.params;
	const { name, value } = request.body;
	try {
		const target = await updateTargetService(id, name, value);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putCurrentQuantity(request, response) {
	const { id } = request.params;
	const { value, productId } = request.body;
	try {
		const target = await updateByIdCurrentQuantityService(id, value, productId);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deleteTarget(request, response) {
	const { id } = request.params;
	try {
		const target = await deleteTargetService(id);
		response.status(200).json(target);
	} catch (e) {
		response.status(400).json(e.message);
	}
}