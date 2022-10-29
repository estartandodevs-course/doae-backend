import { deleteInstituicao } from "../../Repositories/InstituticaoRepository.js";

export async function deleteInstituicaoByIdService(id){
    try {
        const instituicao = await deleteInstituicao(id);
        return instituicao;
    } catch (e) {
        throw new Error(e.message);
    }
}