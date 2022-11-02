import { getInstituicaoByEmail } from "../../Repositories/InstituticaoRepository.js";

export async function sessionService(email){
    try {
        const instituicao = await getInstituicaoByEmail(email);
        if (!instituicao) {
            throw new Error('Instuição não encontrada!');
        }
        return {
            email: instituicao.email,
            id: instituicao.identificador
        };
    } catch (e) {
        console.log(e);
        throw new Error('Instuição não encontrada!');
    }
}