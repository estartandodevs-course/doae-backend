import * as yup from "yup";

export async function postTargetMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório."),
		description: yup.string("Descrição da instituição deve ser uma string."),
		day_limit: yup.date("Dia limite da instituição deve ser uma data.").required('Dia limite da instituição é obrigatório.'),
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

export async function getTargetsMidd(req, res, next)
{
	let response = true;
	const schemaGet = yup.object().shape({
		page: yup.number("Valor deve ser um número.")
	});

	await schemaGet.validate(req.query).catch(err => {
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

export async function getIdTargetMidd(req, res, next)
{
	let response = true;
	const schemaId = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
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

export async function getIdTargetInsMidd(req, res, next)
{
	let response = true;
	const schemaIdIns = yup.object().shape({
		page: yup.number("Valor deve ser um número."),
	});

	const schemaIdIns2 = yup.object().shape({
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório.")
	});

	await schemaIdIns.validate(req.query).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaIdIns2.validate(req.params).catch(err => {
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

export async function putTargetMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

	const schemaPut2 = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
	});

	await schemaPut.validate(req.params).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaPut2.validate(req.body).catch(err => {
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

export async function putCurrentQuantMidd(req, res, next)
{
	let response = true;
	const schemaPutCurrentQuant = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

	const schemaPutCurrentQuant2 = yup.object().shape({
		productId: yup.string("Id do produto deve ser uma string."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
	});

	await schemaPutCurrentQuant.validate(req.params).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaPutCurrentQuant2.validate(req.body).catch(err => {
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