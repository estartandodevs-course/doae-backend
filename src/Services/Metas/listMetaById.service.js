import { getMetaById } from "../../Repositories/MetaRepository.js";
import { getProductMetasByIdMeta } from "../../Repositories/ProductMetaRepository.js";


export async function listMetaById(id) {
    try {
        const meta = await getMetaById(id);
        const produto = await getProductMetasByIdMeta(id_meta);
        return meta, produto;
    } catch (e) {
        console.log(e);
        throw new Error("Não foi possível buscar a meta.");
    }
}
