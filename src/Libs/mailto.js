import transporter from "../Configs/smtp.js";
import fs from "fs";
import path from "path";

export async function mailto(event, email, htmlmail = null, textmail = null) {
	if (htmlmail && textmail){
		try {
			const mailto = await transporter.sendMail({
				from: "relpimidoacoes@gmail.com",
				to: email,
				subject: 'Doae',
				text: textmail,
				html: htmlmail,
			});
			return mailto;
		} catch (e) {
			console.log(e);
			throw new Error("Envio de emails não está concectado.");
		}
	}

	if(!event){
		throw new Error("Esse evento não está configurado.");
	}

	if(!email){
		throw new Error("Email inválido.");
	}

	const pathDirHtml =  path.resolve('src', 'Templates', `${event}.html`);
	const pathDirTxt =  path.resolve('src', 'Templates', `${event}.txt`);

	const html = fs.readFileSync(pathDirHtml);
	const txt = fs.readFileSync(pathDirTxt);

	try {
		const mailto = await transporter.sendMail({
			from: "relpimidoacoes@gmail.com",
			to: email,
			subject: 'Doae',
			text: txt,
			html: html,
		});
		return mailto;
	} catch (e) {
		console.log(e);
		throw new Error("Envio de emails não está concectado.");
	}
}
