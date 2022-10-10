import MetaModel from "../Models/MetaModel";

export async function createMeta(
	id,
	name,
	value,
	current_quantity,
	id_institution
) {
	try {
		const newMeta = await MetaModel.create({
			id,
			name,
			value,
			current_quantity,
			id_institution,
			suspend: false,
		});
		return newMeta;
	} catch (e) {
		throw new Error("Não foi possível criar a meta.");
	}
}

export async function updateMetaById(id) {
	try {
		const updateMeta = await meta.updateOne({});
	} catch (e) {}
}

export async function updateByIdCurrentQuantity() {}

export async function deleteMetaById() {}

export async function getMetaById(id) {}

export async function getMetasByIdInstitution(id) {}

export async function getAllMetas() {}
