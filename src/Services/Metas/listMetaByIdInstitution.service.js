import { getMetasByIdInstitution } from "../../Repositories/MetaRepository.js";

export async function listMetasByIdInstitution(id_institution){
    try {
        const metas = await getMetasByIdInstitution(id_institution);
        return metas;
    } catch (e) {
        console.log(e);
        throw new Error("Não foi possível buscar as metas.");
    }
}