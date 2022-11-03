import { createPublicationService } from "../Services/Publications/createPublication.service.js";
import { deletePublicationByIdService } from "../Services/Publications/deletePublication.service.js";
import { listPublicationByIdService } from "../Services/Publications/listPublicationById.service.js";
import { listPublicationsByIdInstitutionService } from "../Services/Publications/listPublicationsByIdinstitution.service.js";
import { updatePublicationByIdService } from "../Services/Publications/updatePublication.service.js";
import { updateMidiaPublicationService } from "../Services/Publications/updateMidiaPublication.service.js";
import { listPublicationsService } from "../Services/Publications/listPublications.service.js";

export async function postPublication(request, response) {
  const { midia, description, id_institution } = request.body;
  try {
    const publication = await createPublicationService(midia, description, id_institution);
    response.status(200).json(publication);
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
		const publication = await listPublicationsByIdInstitutionService(id_institution, page);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getPublications(request, response) {
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
	const { midia, description } = request.body;
	try {
		const publication = await updatePublicationByIdService(id, midia, description);
		response.status(200).json(publication);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putMidiaPublication(request, response) {
	const { id } = request.query;
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