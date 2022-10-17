import { createDoacao } from "../../Repositories/DoacaoRepository.js";
import { v4 as uuid } from "uuid";
import { mailto } from "../../Libs/mailto.js";

export async function createDoacaoService(
	id_institution,
	value,
	email_doador,
	id_meta,
	id_product
) {
	const id = uuid();
	const status = null;
	const suspend = false;
	try {
		const doacao = await createDoacao(
			id,
			id_institution,
			status,
			value,
			email_doador,
			id_meta,
			id_product,
			suspend
		);
		try {
			await mailto("doacao_realizada", email_doador);
		} catch (e) {
			throw new Error(e.message);
		}
		return doacao;
	} catch (e) {
		throw new Error(e.message);
	}
}
