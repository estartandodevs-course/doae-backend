import { updateInstituicaoFoto } from "../../Repositories/InstituticaoRepository.js";
import { uploadImage } from "../../Libs/uploadCloud.js";

export async function updateFotoInstituicaoService(id, logomarca) {
    const logoImage = await uploadImage(logomarca);
    const urlLogo = logoImage.url;
	try {
		const instituicao = await updateInstituicaoFoto(id, urlLogo);
		return instituicao;
	} catch (e) {
		throw new Error(e.message);
	}
}
