import transporter from "../config/smtp.js";
import fs from "fs";

export async function mailto(event, email) {
	const htmls = {
		"bem-vindo":  fs.readFileSync(`.src/Templates/${event}.html`, 'uft-8'),
		"doacao_realizada": fs.readFileSync(`.src/Templates/${event}.html`, 'uft-8'),
		"doacao_aceita": fs.readFileSync(`.src/Templates/${event}.html`, 'uft-8'),
		"doacao_recusada": fs.readFileSync(`.src/Templates/${event}.html`, 'uft-8'),

	}

	const texts = {
		"bem-vindo": fs.readFileSync(`.src/Templates/${event}.txt`, 'uft-8'),
		"doacao_realizada": fs.readFileSync(`.src/Templates/${event}.txt`, 'uft-8'),
		"doacao_aceita": fs.readFileSync(`.src/Templates/${event}.txt`, 'uft-8'),
		"doacao_rejeitada": fs.readFileSync(`.src/Templates/${event}.txt`, 'uft-8'),
	}

	if(!event){
		throw new Error("Esse template não está configurado");
	}

	try {
		const mailto = await transporter.sendMail({
			from: "noreply@doae.com",
			to: email,
			subject: 'Doae',
			text: texts[event],
			html: htmls[event],
		});
		return mailto;
	} catch (e) {
		throw new Error("Email não está concectado.");
	}
}
