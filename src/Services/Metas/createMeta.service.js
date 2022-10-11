import { createMeta } from "../../Repositories/MetaRepository.js";
import { v4 as uuid } from "uuid";

export async function createMetaService(name, value, id_institution) {
	const id = uuid();
	const current_quantity = 0;
	try {
        const meta = await createMeta(id, name, value, current_quantity, id_institution);
        return meta;
    } catch (e) {
        console.log(e);
        return "Não foi possível criar a meta. Favor verificar os dados enviados!"
    }
}