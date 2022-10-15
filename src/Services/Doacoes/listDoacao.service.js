import { getDoacoes } from "../../Repositories/DoacaoRepository.js";

export async function listDoacaoService(){
    try {
        const doacoes = await getDoacoes();
        return doacoes;
    } catch (e) {
        throw new Error(e.message);
    }
}