import ProdutoMetaModel from "../Models/ProdutoMetaModel.js";

export async function createProductTarget(
	id,
	name,
	value,
	id_meta,
	id_institution
) {
	try {
		const newProdutoMeta = await ProdutoMetaModel.create({
			id,
			name,
			value,
			id_meta,
			id_institution,
			suspend: false,
		});
		return newProdutoMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductTargetById(id) {
	try {
		const produtoMeta = await ProdutoMetaModel.findOne({
			id: id,
			suspend: false,
		});
		return produtoMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getProductTargetByIdMeta(idMeta) {
	try {
		const produtosMeta = await ProdutoMetaModel.find({
			id_meta: idMeta,
			suspend: false,
		});
		return produtosMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}


export async function updateProductTargetById(id, name, value) {
	try {
		const updateProdutoMeta = await ProdutoMetaModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ name, value }
		);
		return updateProdutoMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteProductTargetById(id) {
	try {
		const deleteProdutoMeta = await ProdutoMetaModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deleteProdutoMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}