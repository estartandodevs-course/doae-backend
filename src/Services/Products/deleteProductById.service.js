import { deleteProductMetaById } from "../../Repositories/ProductMetaRepository.js";

export async function updateProductMetaByIdService(id){
    try {
        const deleteMeta = await deleteProductMetaById(id);
        return deleteMeta;
    } catch(e){
        console.log(e);
        return "Não foi possível excluir o produto."
    }
}