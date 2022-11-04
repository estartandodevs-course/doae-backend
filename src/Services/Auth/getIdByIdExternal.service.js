import { getInstitutionByIdExternal } from "../../Repositories/InstitutionRepository.js";

export async function getIdByIdExternal(id_external){
    try {
        const [ institution ] = await getInstitutionByIdExternal(id_external);
        return institution.id;
    } catch (e) {
        console.log(e)
        throw new Error('Id não encontrado!');
    }
}