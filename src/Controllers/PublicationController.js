import { createPublicationService } from "../Services/Publications/createPublication.service.js";
import { deletePublicationByIdService } from "../Services/Publications/deletePublication.service.js";
import { listPublicationByIdService } from "../Services/Publications/listPublicationById.service.js";
import { listPublicationsByIdInstitutionService } from "../Services/Publications/listPublicationsByIdinstitution.service.js";
import { updatePublicationByIdService } from "../Services/Publications/updatePublication.service.js";
import { updateMidiaPublicationService } from "../Services/Publications/updateMidiaPublication.service.js";
import { listPublicationsService } from "../Services/Publications/listPublications.service.js";
import { getIdByIdExternal } from "../Services/Auth/getIdByIdExternal.service.js";

export async function postPublication(request, response) {
	const { description, id_institution } = request.body;
	const midia = request.file;
	const path = midia.path;
	try {
		const id = await getIdByIdExternal(id_institution);
		const publication = await createPublicationService(description, id);
		const publicationLogo = await updateMidiaPublicationService(id, path);
		response.status(200).json(publicationLogo);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getPublicationById(request, response) {
	const { id } = request.params;
	try {
		const publication = await listPublicationByIdService(id);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getPublicationsByIdInstitution(request, response) {
	const { page } = request.query;
	const { id_institution } = request.params;
	try {
		const id = await getIdByIdExternal(id_institution);
		const publication = await listPublicationsByIdInstitutionService(id, page);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getPublicationsAll(request, response) {
	const { page } = request.query;
	try {
		const publications = await listPublicationsService(page);
		response.status(200).json(publications);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putPublication(request, response) {
	const { id } = request.params;
	const { description } = request.body;
	try {
		const publication = await updatePublicationByIdService(id, description);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putMidiaPublication(request, response) {
	const { id } = request.params;
	const midia = request.file;
	const path = midia.path;

	try {
		const publication = await updateMidiaPublicationService(id, path);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function deletePublication(request, response) {
	const { id } = request.params;
	try {
		const publication = await deletePublicationByIdService(id);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
