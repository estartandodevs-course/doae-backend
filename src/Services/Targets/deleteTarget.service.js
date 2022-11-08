import { deleteTargetById } from "../../Repositories/TargetRepository.js";

export async function deleteTargetService(id) {
	try {
		const target = await deleteTargetById(id);
		return target;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}