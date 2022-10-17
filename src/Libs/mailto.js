import transporter from "../config/smtp.js";

export async function mailto(event, email) {
	let html;
	let text;
	let title;

	if (event === "doacao_realizada") {
		html = "<p>Doação realizada!</p>";
		text = "Doação realizada!";
		title = "Doação realizada!";
	} else {
		throw new Error("Esse template não está configurado");
	}

	try {
		const mailto = await transporter.sendMail({
			from: "noreply@doae.com",
			to: email,
			subject: title,
			text: text,
			html: html,
		});
		return mailto;
	} catch (e) {
		throw new Error("Email não está concectado.");
	}
}

/*

//testes
try {
	const send = await mailto(undefined, "teste@teste.com");
	console.log(send);
} catch (e) {
	console.error(e.message);
}

// resposta de sucesso
const resonse = {
	accepted: [ "teste@teste.com" ],
	rejected: [],
	envelopeTime: 460,
	messageTime: 353,
	messageSize: 595,
	response: "250 2.0.0 Ok: queued",
	envelope: { from: "noreply@relpimi.com", to: [ "teste@teste.com" ] },
	messageId: "<61164bd8-285d-7abb-77cf-f63d1522d382@relpimi.com>"
};

//erro
"Not connected";

*/
