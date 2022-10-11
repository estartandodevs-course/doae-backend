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

export async function getMetasByIdInstitution(id_institution) {
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

export async function updateMetaById(id, name, value) {
  try {
    const updateMeta = await MetaModel.updateOne({ id }, { name, value });

    if (!meta) {
      throw new Error(e.message);
    }
    return meta;
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
