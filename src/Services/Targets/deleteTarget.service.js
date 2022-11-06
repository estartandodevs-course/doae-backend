import { deleteTargetById } from "../../Repositories/TargetRepository.js";
import { listProductsByIdTargetService } from "../Products/listProductsByIdTarget.service.js";

export async function deleteTargetService(id) {
	//sinalizar
	const existProduct = await listProductsByIdTargetService(id);
	if(existProduct.length > 0){
		throw new Error("Não podemos deletar uma meta com produtos.")
	}
	try {
		const target = await deleteTargetById(id);
		return target;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}