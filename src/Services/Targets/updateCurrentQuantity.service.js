import {
	getTargetById,
	updateByIdCurrentQuantity,
} from "../../Repositories/TargetRepository.js";
import { getProductById } from "../../Repositories/ProductRepository.js";

export async function updateByIdCurrentQuantityService(id, value, id_product) {
	let currentValue;
	let newValue;
	try {
		const meta = await getTargetById(id);
		currentValue = meta.current_quantity;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
	//sinalizar
	if (value) {
        newValue = value + currentValue;
	} else {
		const product = await getProductById(id_product);
        const valueProduct = product.value;
        newValue = valueProduct + currentValue;
    }

	try {
		const target = await updateByIdCurrentQuantity(id, newValue);
		return target;
	} catch (e) {
		throw new Error(e.message);
	}
}
