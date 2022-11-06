import { createInstitutionService } from "../Services/Institutions/createInstitution.service.js";
import { deleteInstitutionByIdService } from "../Services/Institutions/deleteInstitution.service.js";
import { listInstitutionsService } from "../Services/Institutions/listInstitutions.service.js";
import { listInstitutionByIdService } from "../Services/Institutions/listInstitutionById.service.js";
import { updateInstitutionByIdService } from "../Services/Institutions/updateInstitution.service.js";
import { updateLogoInstitutionService } from "../Services/Institutions/updateLogo.service.js";
import { getIdByIdExternal } from "../Services/Auth/getIdByIdExternal.service.js";

export async function postInstitution(request, response) {
	const {
		name,
		cnpj,
		email,
		password,
		description,
		agency,
		count,
		pix,
		phone,
		cep,
		site,
		verified,
	} = request.body;
	const logo = request.file;
	const path = logo.path;
	try {
		const institution = await createInstitutionService(
			name,
			cnpj,
			description,
			agency,
			count,
			pix,
			phone,
			cep,
			site,
			email,
			password,
			verified
		);
		const id_institution = await getIdByIdExternal(institution.id);
		const institutionLogo = await updateLogoInstitutionService(
			id_institution,
			path
		);
		response.status(200).json(institutionLogo);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getInstitutions(request, response) {
	const { page } = request.query;
	try {
		const institutions = await listInstitutionsService(page);
		response.status(200).json(institutions);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function getInstitutionById(request, response) {
	const { id } = request.params;
	try {
		const id_institution = await getIdByIdExternal(id);
		const institution = await listInstitutionByIdService(id_institution);
		response.status(200).json(institution);
	} catch (e) {
		response.status(400).json(e.message);
	}
}

export async function putInstitution(request, response) {
	const { id } = request.params;
	const { name, description, phone, cep, site, pix, agency, count } =
		request.body;
	try {
		const id_institution = await getIdByIdExternal(id);
		const institution = await updateInstitutionByIdService(
			id_institution,
			name,
			description,
			phone,
			cep,
			site,
			pix,
			agency,
			count
		);
		response.status(200).json(institution);
	} catch (e) {
		console.log(e);
		response.status(400).json(e.message);
	}
}

export async function deleteInstitutionById(request, response) {
	const { id } = request.params;
	try {
		const id_institution = await getIdByIdExternal(id);
		const institution = await deleteInstitutionByIdService(id_institution);
		response.status(200).json(institution);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
