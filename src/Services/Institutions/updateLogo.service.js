import { updateInstitutionLogo } from "../../Repositories/InstitutionRepository.js";
import { uploadImage } from "../../Libs/uploadCloud.js";
import fs from "fs";

export async function updateLogoInstitutionService(id, logo) {
    const logoImage = await uploadImage(logo);
    const urlLogo = logoImage.url;
	try {
		const institution = await updateInstitutionLogo(id, urlLogo);
		return institution;
	} catch (e) {
		throw new Error(e.message);
	} finally {
		fs.unlinkSync(logo);
	}
}
