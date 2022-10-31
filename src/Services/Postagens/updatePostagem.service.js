import { updatePostagemById } from "../../Repositories/PostagemRepository.js";

export async function updatePostagemByIdService(id, midia, descricao){
    try {
        const updatePostagem = await updatePostagemById(id, midia, descricao);
        return updatePostagem;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível atualizar a postagem.");
    }
}