import { deleteProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function deleteProdutoMetaByIdService(id){
    try {
        const deleteMeta = await deleteProductTargetById(id);
        return deleteMeta;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}