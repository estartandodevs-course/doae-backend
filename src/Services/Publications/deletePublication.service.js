import { deletePublicationById } from "../../Repositories/PublicationRepository.js";

export async function deletePublicationByIdService(id){
    try {
        const deletePublication = await deletePublicationById(id);
        return deletePublication;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível excluir a postagem.");
    }
}