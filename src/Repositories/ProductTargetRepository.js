import ProductTargetModel from "../Models/ProductTargetModel.js";

export async function createProductTarget(
	id,
	name,
	value,
	id_target,
	id_institution
) {
	try {
		const newProductTarget = await ProductTargetModel.create({
			id,
			name,
			value,
			id_target,
			id_institution,
			suspend: false,
		});
		return newProductTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductTargetById(id) {
	try {
		const productTarget = await ProductTargetModel.findOne({
			id: id,
			suspend: false,
		});
		return productTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductTargetByIdMeta(idTarget) {
	try {
		const productTarget = await ProductTargetModel.find({
			id_target: idTarget,
			suspend: false,
		});
		return productTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}


export async function updateProductTargetById(id, name, value) {
	try {
		const updateProductTarget = await ProductTargetModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ name, value }
		);
		return updateProductTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteProductTargetById(id) {
	try {
		const deleteProductTarget = await ProductTargetModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deleteProductTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}
