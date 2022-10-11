import { updateMetaById } from "../../Repositories/MetaRepository.js";

export async function updateMetaService(id, name, value) {
	try {
        const meta = await updateMetaById(id, name, value);
        return meta;
    } catch (e) {
        console.log(e);
        throw new Error("Não foi possível atualizar a meta. Favor verificar os dados enviados!");
    }
}
