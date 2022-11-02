import { updateTargetById } from "../../Repositories/TargetRepository.js";

export async function updateTargetService(id, name, value) {
	try {
        const target = await updateTargetById(id, name, value);
        return target;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
}
