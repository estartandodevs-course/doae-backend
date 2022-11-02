import MetaModel from "../Models/MetaModel.js";

export async function createTarget(
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

export async function getTargetById(id) {
	try {
		const meta = await MetaModel.findOne({ id, suspend: false });
		return meta;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getTargetByIdInstitution(id_institution) {
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

export async function getAllTarget() {
	try {
		const allMetas = await MetaModel.find({ suspend: false });
		return allMetas;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateTargetById(id, name, value) {
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

export async function deleteTargetById(id) {
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