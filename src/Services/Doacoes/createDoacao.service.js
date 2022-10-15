import { createDoacao } from "../../Repositories/DoacaoRepository.js";
import { v4 as uuid } from "uuid";

export async function createDoacaoService(
	id_institution,
	value,
	email_doador,
	id_meta,
	id_product
    ){
    const id = uuid();
    const status = null;
    const suspend = false;
    
}