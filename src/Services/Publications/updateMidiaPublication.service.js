import {
	updateMidiaPublication,
	getPublicationById,
} from "../../Repositories/PublicationRepository.js";
import { uploadImage } from "../../Libs/uploadCloud.js";
import fs from "fs";

export async function updateMidiaPublicationService(id, midia) {
	try {
		const logoImage = await uploadImage(midia);
		const urlLogo = logoImage.url;
		const publicationLogo = await updateMidiaPublication(id, urlLogo);
		const publication = await getPublicationById(id);
		return publication;
	} catch (e) {
		console.log(e);
		throw new Error(
			"Não foi possível criar a postagem. Favor verifique os parametros!"
		);
	} finally {
		fs.unlinkSync(midia);
	}
}
