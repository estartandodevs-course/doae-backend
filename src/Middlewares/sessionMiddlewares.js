const admin = require("firebase-admin");

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