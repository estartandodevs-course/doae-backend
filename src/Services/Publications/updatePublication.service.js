import { updatePublicationById } from "../../Repositories/PublicationRepository.js";

export async function updatePublicationByIdService(id, description){
    try {
        const updatePublication = await updatePublicationById(id, description);
        return updatePublication;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível atualizar a postagem.");
    }
}