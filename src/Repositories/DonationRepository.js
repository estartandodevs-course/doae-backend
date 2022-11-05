import DonationModel from "../Models/DonationModel.js";

export async function createDonation(
	id,
	id_institution,
	status,
	value,
	email_giver,
	id_target,
	suspend
) {
	try {
		const donation = await DonationModel.create({
			id,
			id_institution,
			status,
			value,
			email_giver,
			id_target,
			suspend,
		});
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDonations() {
	try {
		const donations = await DonationModel.findAll({
			where: {
				suspend: false
			}
		});
		return donations;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDonationById(id) {
	try {
		const donation = await DonationModel.findAll({
			where: {
				id: id,
				suspend: false
			},
		});
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDonationsByIdTarget(id_target) {
	try {
		const donations = await DonationModel.findAll({
			where: {
				id_target: id_target,
			},
		});
		return donations;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function getDonationsByIdInstitution(id_institution) {
	try {
		const donations = await DonationModel.findAll({
			where: {
				id_institution: id_institution,
			},
		});
		return donations;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function updateDonation(id, status) {
	try {
		const donations = await DonationModel.update(
			{
				status: status,
			},
			{
				where: {
					id: id,
				},
			},
		);
		return donations;
	} catch (e) {
		throw new Error(e.message);
	}
}

export async function deleteDonation(id) {
	try {
		const donation = await DonationModel.update(
			{
				suspend: true,
			},
			{
				where: {
					id: id,
				},
			},
		);
		return donation;
	} catch (e) {
		throw new Error(e.message);
	}
}
