import { createTarget } from "../../Repositories/TargetRepository.js";
import { v4 as uuid } from "uuid";

export async function createMetaService(name, value, id_institution, description, day_limit) {
	const id = uuid();
	const current_quantity = 0;
	try {
        const meta = await createTarget(id, name, value, current_quantity, id_institution, description, day_limit);
        return meta;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
}
