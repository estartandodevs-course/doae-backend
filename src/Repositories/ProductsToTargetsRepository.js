import ProductsToTargetsModel from "../Models/ProductsToTargetsModel.js";

export async function createProductsToTargets(id, id_target, id_product) {
	try {
		const newRelation = await ProductsToTargetsModel.create({
			id,
			id_target,
			id_product,
		});
		return newRelation;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductsToTargetsByIdTarget(id_target) {
	try {
		const relations = await ProductsToTargetsModel.find({
			id_target: id_target,
		});
		return relations;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductsToTargetsByIdProduct(id_product) {
	try {
		const product = await ProductsToTargetsModel.find({
			id_product: id_product,
		});
		return product;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductsToTargetsByIdTargetAndProduct(
	id_target,
	id_product
) {
	try {
		const product = await ProductsToTargetsModel.findOne({
			id_target: id_target,
			id_product: id_product,
		});
		return product;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteProductsToTargetsById(id) {
	try {
		const deleteProduct = await ProductsToTargetsModel.deleteOne({ id: id });
		return deleteProduct;
	} catch (e) {
		throw new Error(e.message);
	}
}
