import { createProductMeta } from "../../Repositories/ProductMetaRepository.js";
import { v4 as uuid } from "uuid";

export async function createProductMetaService(
	name,
	value,
	id_meta,
	id_institution
) {
    const id = uuid();
	try {
        const product = await createProductMeta(id, name, value, id_meta, id_institution);
        return product;
	} catch (e) {
        console.log(e);
        throw new Error("Não foi possível adicionar o produto. Favor verifique os parametros!");
    }
}
