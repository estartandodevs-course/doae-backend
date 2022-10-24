import { getProdutoMetaById } from "../../Repositories/ProdutoMetaRepository.js";

export async function listProdutoByIdService(id) {
	try {
		const produto = await getProdutoMetaById(id);
		return produto;
	} catch (e) {
		console.log(e);
		throw new Error("Não foi possível buscar o produto.");
	}
}