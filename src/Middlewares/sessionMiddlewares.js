import yup from "yup";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const secret = process.env.SECRET;

export async function sessionAuthTokenMidd(req, res, next){
	let response = true;
	const schemaId = yup.object().shape({
		email: yup.string("Email deve ser uma string.").required("Email é obrigatório."),
		password: yup.string("Password deve ser uma string.").required("Password é obrigatório."),
	});

	await schemaId.validate(req.body).catch(err => {
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

export async function requiredToken(req, res, next){
	const auth = req.headers['authorization'];
	if(!auth) {
		return res.status(403).json({ message: "Não autorizado."});
	}
	const token = auth.split(' ')[1];
	const verified = jwt.verify(token, secret);
	if(verified){
		next();
	} else {
		return res.status(403).json({ message: "Não autorizado."});
	}
}