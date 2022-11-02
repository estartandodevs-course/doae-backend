import { updateMidiaPostagem } from "../../Repositories/PostagemRepository.js";
import { uploadImage } from "../../Libs/uploadCloud.js";
import fs from "fs";

export async function updateMidiaPostagemService(id, midia) {
	try {
		const logoImage = await uploadImage(midia);
		const urlLogo = logoImage.url;
		const postagem = await updateMidiaPostagem(id, urlLogo);
		return postagem;
	} catch (e) {
		console.log(e);
		throw new Error(
			"Não foi possível criar a postagem. Favor verifique os parametros!"
		);
	} finally {
		fs.unlinkSync(midia);
	}
}
