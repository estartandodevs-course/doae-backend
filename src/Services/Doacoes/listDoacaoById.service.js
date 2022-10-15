import { getDoacaoById } from "../../Repositories/DoacaoRepository.js";

export async function listDoacaoByIdService(id){
    try {
        const doacao = await getDoacaoById(id);
        return doacao;
    } catch (e) {
        throw new Error(e.message);
    }
}