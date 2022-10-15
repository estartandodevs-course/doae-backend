import { getDoacoesByIdInstitution } from "../../Repositories/DoacaoRepository.js";

export async function listDoacaoByIdInstitutionService(id_institution){
    try {
        const doacoes = await getDoacoesByIdInstitution(id_institution);
        return doacoes;
    } catch (e) {
        throw new Error(e.message);
    }
}