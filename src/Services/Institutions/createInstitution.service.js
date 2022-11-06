import { createInstitution } from "../../Repositories/InstitutionRepository.js";
import { hashPassword } from "../../Funcs/hashPassword.js";
import { uploadImage } from "../../Libs/uploadCloud.js";
import { v4 as uuid } from "uuid";
import { mailto } from "../../Libs/mailto.js";
import shortid from "shortid";
import fs from "fs";

export async function createInstitutionService(
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
	logo,
	verified = false
) {
	const id = uuid();
	const id_external = shortid();
	const suspend = false;
	const pass = await hashPassword(password);
	try {
		const logoImage = await uploadImage(logo);
		const urlLogo = logoImage.url;
		const institution = await createInstitution(
			id,
			name,
			cnpj,
			description,
			agency,
			count,
			pix,
			phone,
			cep,
			id_external,
			site,
			verified,
			suspend,
			email,
			pass,
			urlLogo
		);
		await mailto("bem_vindo", email);
		return institution;
	} catch (e) {
		throw new Error(e.message);
	} finally {
		fs.unlinkSync(logo);
	}
}
