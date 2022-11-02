import MetaModel from "../Models/MetaModel.js";

export async function createMeta(
	id,
	name,
	value,
	current_quantity,
	id_institution,
	description,
	day_limit
) {
	try {
		const newMeta = await MetaModel.create({
			id,
			name,
			target_value: value,
			current_quantity,
			id_institution,
			description,
			day_limit,
			suspend: false,
		});
		return newMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getMetaById(id) {
	try {
		const meta = await MetaModel.findOne({ id, suspend: false });
		return meta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getMetasByIdInstituicao(id_institution) {
	try {
		const metaInstution = await MetaModel.find({
			id_institution,
			suspend: false,
		});
		return metaInstution;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getAllMetas() {
	try {
		const allMetas = await MetaModel.find({ suspend: false });
		return allMetas;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getMetasSuspend() {
	try {
		const allMetas = await MetaModel.find({ suspend: true });
		return allMetas;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateMetaById(id, name, value) {
	try {
		const updateMeta = await MetaModel.updateOne({ id }, { name, value });
		return updateMeta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateByIdCurrentQuantity(id, newCurrentQuantity) {
	try {
		const meta = await MetaModel.updateOne(
			{ id, suspend: false },
			{ current_quantity: newCurrentQuantity }
		);
		return meta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteMetaById(id) {
	try {
		const metaDelete = await MetaModel.updateOne(
			{ id, suspend: false },
			{ suspend: true }
		);
		return metaDelete;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function recoverMetaById(id) {
	try {
		const metaDelete = await MetaModel.updateOne(
			{ id, suspend: true },
			{ suspend: false }
		);
		return metaDelete;
	} catch (e) {
		throw new Error(e.message);
	}
}