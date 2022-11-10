import {
	postDonation,
	getDonations,
	getDonationById,
	getDonationsByIdInstitution,
	getDonationsByIdTarget,
	putDonation,
	deleteDonation,
	getStatusDonationsByIdInstitution,
	getSumDonations
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
import { requiredToken } from "../Middlewares/sessionMiddlewares.js";

const routesDonation = Router();

routesDonation.post("/donation", requiredToken, postDonationMidd, postDonation);

routesDonation.get("/donation", requiredToken, getDonationsMidd, getDonations);

routesDonation.get("/donation/sum", getSumDonations);

routesDonation.get("/donation/:id", requiredToken, getIdDonationMidd, getDonationById);

routesDonation.get("/donation/institution/:id_institution", requiredToken, getIdDonationsInsMidd, getDonationsByIdInstitution);

routesDonation.get("/donation/status/:id_institution", getStatusDonationsByIdInstitution);

routesDonation.get("/donation/target/:id_target", requiredToken, getIdDonationsTargetMidd, getDonationsByIdTarget);

routesDonation.put("/donation/:id", requiredToken, putDonationMidd, putDonation);

routesDonation.delete("/donation/:id", requiredToken, getIdDonationMidd, deleteDonation);

export default routesDonation;