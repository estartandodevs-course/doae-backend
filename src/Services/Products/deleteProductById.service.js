import { deleteProductMetaById } from "../../Repositories/ProductMetaRepository.js";

export async function deleteProductMetaByIdService(id){
    try {
        const deleteMeta = await deleteProductMetaById(id);
        return deleteMeta;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível excluir o produto.");
    }
}