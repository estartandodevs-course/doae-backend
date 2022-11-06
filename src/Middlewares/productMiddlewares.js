import * as yup from "yup";

export async function postProductMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id_target: yup.string("Id da meta deve ser uma string."),
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório.")
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

export async function getProductIdTargetMidd(req, res, next)
{
	let response = true;
	const schemaGet = yup.object().shape({
		page: yup.number("Valor deve ser um número.")
	});

	const schemaGet2 = yup.object().shape({
		id_target: yup.string("Id da meta deve ser uma string.").required("Id da meta é obrigatório.")
	});

	await schemaGet.validate(req.query).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaGet2.validate(req.params).catch(err => {
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

export async function getProductIdInstitutionMidd(req, res, next)
{
	let response = true;
	const schemaGet = yup.object().shape({
		page: yup.number("Valor deve ser um número.")
	});

	const schemaGet2 = yup.object().shape({
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório.")
	});

	await schemaGet.validate(req.query).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaGet2.validate(req.params).catch(err => {
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

export async function getIdProductsMidd(req, res, next)
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

export async function putProductMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
	});

	const schemaPut2 = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

	await schemaPut.validate(req.body).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaPut2.validate(req.params).catch(err => {
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