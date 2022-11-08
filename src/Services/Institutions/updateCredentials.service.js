import { updateCredentialsInstitution } from "../../Repositories/InstitutionRepository.js";

export async function updateCredentialsInstitutionService(id, email, password){
    try {
        const instituition = await updateCredentialsInstitution(id, email, password);
        return instituition;
    } catch (e) {
        throw new Error('Não foi possível alterar o email e senha da instituição.')
    }
}