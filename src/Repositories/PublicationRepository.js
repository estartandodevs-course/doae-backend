import PublicationModel from "../Models/PublicationModel.js";

export async function createPublication(
	id,
	description,
	id_institution
) {
	try {
		const newPublications = await PublicationModel.create({
			id,
			description,
			id_institution,
			suspend: false,
		});
		return newPublications;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateMidiaPublication(
	id,
	midia
) {
	try {
		const newPublications = await PublicationModel.updateOne(
		{
			id: id	
		},
		{
			midia: midia
		}
		);
		return newPublications;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getPublicationById(id) {
	try {
		const publications = await PublicationModel.findOne({
			id: id,
			suspend: false,
		});
		return publications;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getPublicationsByIdInstitution(idInstitution) {
	try {
		const publications = await PublicationModel.find({
			id_institution: idInstitution,
			suspend: false,
		});
		return publications;
	} catch (e) {
		throw new Error(e.message);
	}
}


export async function updatePublicationById(id, description) {
	try {
		const updatePublications = await PublicationModel.updateOne(
			{
				id: id,
				suspend: false,
			},
			{ description }
		);
		return updatePublications;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deletePublicationById(id) {
	try {
		const deletePublications = await PublicationModel.updateOne(
			{ id: id, suspend: false },
			{ suspend: true }
		);
		return deletePublications;
	} catch (e) {
		throw new Error(e.message);
	}
}
