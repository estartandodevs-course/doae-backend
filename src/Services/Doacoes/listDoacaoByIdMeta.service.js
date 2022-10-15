import { getDoacoesByIdMeta } from "../../Repositories/DoacaoRepository.js";

export async function getDoacoesByIdMetaService(id_meta){
    try {
        const doacoes = await getDoacoesByIdMeta(id_meta);
        return doacoes;
    } catch (e) {
        throw new Error(e.message);
    }
}