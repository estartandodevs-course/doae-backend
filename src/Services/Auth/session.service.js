import { getInstitutionByEmail } from "../../Repositories/InstitutionRepository.js";
import { hashPassword } from "../../Funcs/hashPassword.js";

export async function sessionService(email, password){
    try {
        const pass = await hashPassword(password);
        const institution = await getInstitutionByEmail(email);
        if (!institution) {
            throw new Error('Instuição não encontrada!');
        }
        if (institution.password !== pass){
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