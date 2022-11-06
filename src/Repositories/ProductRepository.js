import ProductModel from "../Models/ProductModel.js";

export async function createProduct(
	id,
	name,
	value,
	id_target,
	id_institution
) {
	try {
		const newProduct = await ProductModel.create({
			id,
			name,
			value,
			id_target,
			id_institution,
			suspend: false,
		});
		return newProduct;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductById(id) {
	try {
		const product = await ProductModel.findOne({
			id: id,
			suspend: false,
		});
		return product;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductByIdTarget(idTarget) {
	try {
		const product = await ProductModel.find({
			id_target: idTarget,
			suspend: false,
		});
		return product;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductsByIdInstitution(id_institution) {
	try {
		const productInstitution = await ProductModel.find({
			id_institution,
			suspend: false,
		});
		return productInstitution;
	} catch (e) {
		throw new Error(e.message);
	}
}


export async function updateProductById(id, name, value) {
	try {
		const updateProduct = await ProductModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ name, value }
		);
		return updateProduct;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteProductById(id) {
	try {
		const deleteProduct = await ProductModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deleteProduct;
	} catch (e) {
		throw new Error(e.message);
	}
}
