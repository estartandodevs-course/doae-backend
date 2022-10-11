import { updateProductMetaById } from "../../Repositories/ProductMetaRepository.js";

export async function updateProductMetaByIdService(id, name, value){
    try {
        const updateMeta = await updateProductMetaById(id, name, value);
        return updateMeta;
    } catch(e){
        console.log(e);
        return "Não foi possível atualizar o produto."
    }
}