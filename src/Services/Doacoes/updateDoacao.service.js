import { updateDoacao } from "../../Repositories/DoacaoRepository.js";

export async function updateStatusDoacaoService(id, status){
	try {
		const doacao = await updateDoacao(id, status);
		return doacao;
	} catch (e) {
		throw new Error(e.message);
	}
}