import { getInstitutionByEmail } from "../../Repositories/InstituticaoRepository.js";

export async function sessionService(email, password){
    try {
        const institution = await getInstitutionByEmail(email);
        if (!institution) {
            throw new Error('Instuição não encontrada!');
        }
        if (institution.password !== password){
            throw new Error('Senha incorreta.');
        }
        return {
            email: institution.email,
            id: institution.id_external
        };
    } catch (e) {
        console.log(e);
        throw new Error('Instuição não encontrada!');
    }
}