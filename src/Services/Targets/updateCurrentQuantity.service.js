import {
	getTargetById,
	updateByIdCurrentQuantity,
} from "../../Repositories/TargetRepository.js";

export async function updateByIdCurrentQuantityService(id, value, productId) {
	let currentValue;
	let newValue;
	try {
		currentValue = await getTargetById(id);
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
		const target = await updateByIdCurrentQuantity(id, newValue);
		return target;
	} catch (e) {
		console.log(e);
		throw new Error(e.message);
	}
}
