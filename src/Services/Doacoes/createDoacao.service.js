import { createDoacao } from "../../Repositories/DoacaoRepository.js";
import { getMetaById } from "../../Repositories/MetaRepository.js";
import { getProdutoMetaById } from "../../Repositories/ProdutoMetaRepository.js";
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
	const status = undefined;
	const suspend = false;
	if(id_meta){
		const meta = await getMetaById(id_meta);
		if(!meta){
			throw new Error('Não foi possível encontrar essa meta associada.')
		}
		const dateNow = new Date();
		if(dateNow > meta.day_limit){
			throw new Error("Essa meta já encerrou.");
		}
	}
	if (id_product) {
		const produto = await getProdutoMetaById(id_product)
		value = produto.value;
	}
	try {
		const doacao = await createDoacao(
			id,
			id_institution,
			status,
			value,
			email_doador,
			id_meta,
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
