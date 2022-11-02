import { createPublication } from "../../Repositories/PublicationRepository.js";
import { v4 as uuid } from "uuid";

export async function createPublicationService(
	description,
	id_institution
) {
	const id = uuid();
	try {
		const publication = await createPublication(id, description, id_institution);
		return publication;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível criar a postagem. Favor verifique os parametros!");
	}
}
