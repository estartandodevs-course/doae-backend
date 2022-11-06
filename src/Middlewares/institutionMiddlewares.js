import * as yup from 'yup';

export async function postInstitutionMidd(req, res, next)
{	
	console.log(req.body);
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string('Nome deve ser uma string'),
		cnpj: yup.string(),
		email: yup.string(),
		password: yup.string(),
		description: yup.string(),
		agency: yup.string(),
		count: yup.string(),
		pix: yup.string(),
		phone: yup.string(),
		cep: yup.string(),
		site: yup.string(),
	});

	await schemaPost.validate(req.body).catch(err => {
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

export async function idInstitutionMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		id: yup.string('Id deve ser uma string').required('Id da instituição é obrigatório.'),
	});

	await schemaPost.validate(req.params).catch(err => {
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