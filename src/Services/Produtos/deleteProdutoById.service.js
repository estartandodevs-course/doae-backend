import { deleteProdutoMetaById } from "../../Repositories/ProdutoMetaRepository.js";

export async function deleteProdutoMetaByIdService(id){
    try {
        const deleteMeta = await deleteProdutoMetaById(id);
        return deleteMeta;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível excluir o produto.");
    }
}