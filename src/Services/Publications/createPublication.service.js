import { createPublication } from "../../Repositories/PublicationRepository.js";
import { uploadImage } from "../../Libs/uploadCloud.js";
import { v4 as uuid } from "uuid";
import fs from "fs";

export async function createPublicationService(
	description,
	id_institution,
	midia
) {
	const id = uuid();
	try {
		const logoImage = await uploadImage(midia);
		const urlLogo = logoImage.url;
		const publication = await createPublication(id, description, id_institution, urlLogo);
		return publication;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível criar a postagem. Favor verifique os parametros!");
	} finally {
		fs.unlinkSync(midia);
	}
}
