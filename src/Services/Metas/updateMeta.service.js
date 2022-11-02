import { updateTargetById } from "../../Repositories/TargetRepository.js";

export async function updateMetaService(id, name, value) {
	try {
        const meta = await updateTargetById(id, name, value);
        return meta;
    } catch (e) {
        console.log(e);
        throw new Error(e.message);
    }
}
