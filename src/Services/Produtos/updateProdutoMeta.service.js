import { updateProductTargetById } from "../../Repositories/ProductTargetRepository.js";

export async function updateProdutoMetaByIdService(id, name, value){
    try {
        const updateMeta = await updateProductTargetById(id, name, value);
        return updateMeta;
    } catch(e){
        console.log(e);
        throw new Error(e.message);
    }
}