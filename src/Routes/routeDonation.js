import {
	postDonation,
	getDonations,
	getDonationById,
	getDonationsByIdInstitution,
	getDonationsByIdTarget,
	putDonation,
	deleteDonation,
} from "../Controllers/DonationController.js";

import { Router } from "express";

import {
	postDonationMidd,
	getDonationsMidd,
	getIdDonationMidd,
	getIdDonationsInsMidd,
	getIdDonationsTargetMidd,
	putDonationMidd
} from '../Middlewares/donationMiddlewares.js'

const routesDonation = Router();

routesDonation.post("/donations", postDonationMidd, postDonation);

routesDonation.get("/donations/list", getDonationsMidd, getDonations);

routesDonation.get("/donation/:id", getIdDonationMidd, getDonationById);

routesDonation.get("/donations/institution/:id_institution", getIdDonationsInsMidd, getDonationsByIdInstitution);

routesDonation.get("/donations/targets/:id_target", getIdDonationsTargetMidd, getDonationsByIdTarget);

routesDonation.put("/donation/:id", putDonationMidd, putDonation);

routesDonation.delete("/donations/:id", getIdDonationMidd, deleteDonation);

export default routesDonation;