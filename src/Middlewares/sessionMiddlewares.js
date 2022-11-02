import admin from "firebase-admin";
import yup from "yup";

const serviceAccount = require("./doae-8e684-firebase-adminsdk-b63vi-690e675d83.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export async function sessionMidd(req, res, next){
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.send('Unathorized');
    }
	let idToken = authHeader.split("Bearer ")[1];
	try {
		const decodeToken = await admin.auth().verifyIdToken(idToken);
		req["currentUser"] = decodeToken;
	} catch (e) {
		console.log(e);
	}
	next();
}

export async function sessionAuthTokenMidd(req, res, next){
	let response = true;
	const schemaId = yup.object().shape({
		email: yup.string("Email deve ser uma string.").required("Email é obrigatório."),
		password: yup.string("Password deve ser uma string.").required("Password é obrigatório."),
	});

	await schemaId.validate(req.params).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});
	if(response){
		next();
	} else {
		return;
	}
}