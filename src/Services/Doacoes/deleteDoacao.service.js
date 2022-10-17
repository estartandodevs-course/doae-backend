import { deleteDoacao } from "../../Repositories/DoacaoRepository.js";

export async function deleteDoacaoService(id){
	try {
		const doacao = await deleteDoacao(id);
		return doacao;
	} catch (e) {
		throw new Error(e.message);
	}
}