import { createInstitutionService } from "../Services/Institutions/createInstitution.service.js";
import { deleteInstitutionByIdService } from "../Services/Institutions/deleteInstitution.service.js";
import { listInstitutionsService } from "../Services/Institutions/listInstitutions.service.js";
import { listInstitutionByIdService } from "../Services/Institutions/listInstitutionById.service.js";
import { updateInstitutionByIdService } from "../Services/Institutions/updateInstitution.service.js";
import { updateLogoInstitutionService } from "../Services/Institutions/updateLogo.service.js";

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
    verified
  } = request.body;
  try {
    const institution = await createInstitutionService(
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
    verified
    );
    response.status(200).json(institution);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

export async function updateLogoInstitution(request, response) {
  const { id } = request.query;
  const logo = request.file;
  const path = logo.path;
  try {
    const institution = await updateLogoInstitutionService(id, path);
    response.status(200).json(institution);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//lista todas
export async function getInstitutions(request, response) {
  const { page } = request.query;
  try {
    const institutions = await listInstitutionsService(page);
    response.status(200).json(institutions);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//lista por id
export async function getInstitutionById(request, response) {
  const { id } = request.params;
  try {
    const institution = await listInstitutionByIdService(id);
    response.status(200).json(institution);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//atualiza a instituicao
export async function putInstitution(request, response) {
  const { id } = request.params;
  const {
    name,
    description,
    phone,
    cep,
    site,
    pix,
    agency,
    count,
  } = request.body;
  try {
    const institution = await updateInstitutionByIdService(
      name,
    description,
    phone,
    cep,
    site,
    pix,
    agency,
    count,
    );
    response.status(200).json(institution);
  } catch (e) {
    response.status(400).json(e.message);
  }
}

//deleta instituicao
export async function deleteInstitutionById(request, response) {
	const { id } = request.params;
	try {
		const institution = await deleteInstitutionByIdService(id);
		response.status(200).json(institution);
	} catch (e) {
		response.status(400).json(e.message);
	}
}
