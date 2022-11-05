import * as yup from 'yup';

export async function postInstitutionMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string('Nome deve ser uma string').required('Nome da instituição é obrigatório.'),
		cnpj: yup.string().required('CNPJ da instituição é obrigatório.'),
		email: yup.string().required('Email da instituição é obrigatório.'),
		password: yup.string().required('Senha da instituição é obrigatório.'),
		description: yup.string().required('Descrição da instituição é obrigatório.'),
		agency: yup.string(),
		count: yup.string(),
		pix: yup.string(),
		phone: yup.string().required('Telefone da instituição é obrigatório.'),
		cep: yup.string().required('CEP da instituição é obrigatório.'),
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

export async function patchLogoInstitutionMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		
	});

	await schemaPost.validate(req.file).catch(err => {
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