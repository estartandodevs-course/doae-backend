import { createTarget } from "../../Repositories/TargetRepository.js";
import { v4 as uuid } from "uuid";

export async function createTargetService(name, value, id_institution, description, day_limit) {
	const id = uuid();
	const current_quantity = 0;
	try {
        const target = await createTarget(id, name, value, current_quantity, id_institution, description, day_limit);
        return target;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
}
