import { updateProdutoMetaById } from "../../Repositories/ProdutoMetaRepository.js";

export async function updateProdutoMetaByIdService(id, name, value){
    try {
        const updateMeta = await updateProdutoMetaById(id, name, value);
        return updateMeta;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível atualizar o produto.");
    }
}