import transporter from "../config/smtp.js";

async function mailto(event, email){
	try {
		const mailto = await transporter.sendMail({
			from: "\"Relpimi\" <noreply@relpimi.com>",
			to: email,
			subject: "Hello ✔",
			text: "Hello world?",
			html: "<b>Hello world?</b>",
		});
		return mailto;
	} catch (e) {
		throw new Error("Not connected");
	}
}


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