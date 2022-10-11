import ProductMetaModel from "../Models/ProductMetaModel";

export async function createProductMeta(
	id,
	name,
	value,
	id_meta,
	id_institution
) {
	try {
		const newProductMeta = await ProductMetaModel.create({
			id,
			name,
			value,
			id_meta,
			id_institution,
			suspend: false,
		});
		return newProductMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateProductMetaById(id, name, value) {
	try {
		const updateProductMeta = await ProductMetaModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ name, value }
		);
		return updateProductMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteProductMetaById(id) {
	try {
		const deleteProductMeta = await ProductMetaModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deleteProductMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductMetaById(id) {
	try {
		const productMeta = await ProductMetaModel.findOne({
			id: id,
			suspend: false,
		});
		return productMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductMetasByIdMeta(idMeta) {
	try {
		const productsMeta = await ProductMetaModel.find({
			id_meta: idMeta,
			suspend: false,
		});
		return productsMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}
