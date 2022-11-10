import * as yup from 'yup';

export async function postUserMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string('Nome deve ser uma string'),
		email: yup.string(),
		password: yup.string(),
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

export async function idUserMidd(req, res, next)
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