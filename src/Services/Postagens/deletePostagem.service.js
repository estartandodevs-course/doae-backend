import { deletePostagemById } from "../../Repositories/PostagemRepository.js";

export async function deletePostagemByIdService(id){
    try {
        const deletePostagem = await deletePostagemById(id);
        return deletePostagem;
    } catch(e){
        console.log(e);
        throw new Error("Não foi possível excluir a postagem.");
    }
}