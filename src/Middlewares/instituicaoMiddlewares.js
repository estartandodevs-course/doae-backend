import * as yup from 'yup';

export async function postInstituicaoMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		nome: yup.string('Nome deve ser uma string').required('Nome da instituição é obrigatório.'),
		cnpj: yup.string().required('CNPJ da instituição é obrigatório.'),
		email: yup.string().required('Email da instituição é obrigatório.'),
		password: yup.string().required('Senha da instituição é obrigatório.'),
		descricao: yup.string().required('Descrição da instituição é obrigatório.'),
		agencia: yup.string(),
		conta: yup.string(),
		pix: yup.string(),
		telefone: yup.string().required('Telefone da instituição é obrigatório.'),
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

export async function patchMidiaInstituicaoMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		logomarca: yup.required('Logomarca da instituição é obrigatório.'),
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

export async function idInstituicaoMidd(req, res, next)
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