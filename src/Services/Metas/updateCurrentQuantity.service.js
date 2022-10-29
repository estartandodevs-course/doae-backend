import {
	getMetaById,
	updateByIdCurrentQuantity,
} from "../../Repositories/MetaRepository.js";

export async function updateByIdCurrentQuantityService(id, value, productId) {
	let currentValue;
	let newValue;
	try {
		currentValue = await getMetaById(id);
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}

	if (value) {
        newValue = value + currentValue;
	} else {
        const valueProduct = "mock";
        newValue = valueProduct + currentValue;
    }

	try {
		const meta = await updateByIdCurrentQuantity(id, newValue);
		return meta;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
