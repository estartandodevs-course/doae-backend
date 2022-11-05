import TargetModel from "../Models/TargetModel.js";

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
		const newTarget = await TargetModel.create({
			id,
			name,
			target_value: value,
			current_quantity,
			id_institution,
			description,
			day_limit,
			suspend: false,
		});
		return newTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getTargetById(id) {
	try {
		const target = await TargetModel.findOne({ id, suspend: false });
		return target;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getTargetsByIdInstitution(id_institution) {
	try {
		const targetsInstution = await TargetModel.find({
			id_institution,
			suspend: false,
		});
		return targetsInstution;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getAllTargets() {
	try {
		const allTargets = await TargetModel.find({ suspend: false });
		return allTargets;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateTargetById(id, name, value) {
	try {
		const updateTarget = await TargetModel.updateOne({ id }, { name, value });
		return updateTarget;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateByIdCurrentQuantity(id, newCurrentQuantity) {
	try {
		const target = await TargetModel.updateOne(
			{ id, suspend: false },
			{ current_quantity: newCurrentQuantity }
		);
		return target;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteTargetById(id) {
	try {
		const targetDelete = await TargetModel.updateOne(
			{ id, suspend: false },
			{ suspend: true }
		);
		return targetDelete;
	} catch (e) {
		throw new Error(e.message);
	}
}