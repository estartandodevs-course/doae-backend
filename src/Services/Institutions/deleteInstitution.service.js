import { deleteInstitution } from "../../Repositories/InstitutionRepository.js";

export async function deleteInstitutionByIdService(id){
    try {
        const institution = await deleteInstitution(id);
        return institution;
    } catch (e) {
        throw new Error(e.message);
    }
}