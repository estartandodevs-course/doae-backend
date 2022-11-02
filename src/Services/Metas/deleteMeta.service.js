import { deleteTargetById } from "../../Repositories/TargetRepository.js";
import { listProdutosByIdMetaService } from "../Produtos/listProdutosByIdMeta.service.js";

export async function deleteMetaService(id) {
	//sinalizar
	const temProduto = await listProdutosByIdMetaService(id);
	if(temProduto.length > 0){
		throw new Error("Não podemos deletar uma meta com produtos.")
	}
	try {
		const meta = await deleteTargetById(id);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}