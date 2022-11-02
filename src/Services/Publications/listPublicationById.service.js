import { getPublicationById } from "../../Repositories/PublicationRepository.js";

export async function listPublicationByIdService(id) {
	try {
		const publication = await getPublicationById(id);
		return publication;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar a postagem.");
	}
}