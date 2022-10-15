import * as yup from "yup";

export async function postMetaMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
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

//Essa função servirá tanto para getMetas como para getSuspendMetas

export async function getMetasMidd(req, res, next)
{
	let response = true;
	const schemaGet = yup.object().shape({
		page: yup.number("Valor deve ser um número.").required("Valor é obrigatório.")
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

//Essa função servirá tanto para getMetaById, recoverMetaa e deleteMeta

export async function getIdMetasMidd(req, res, next)
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

export async function getIdMetasInsMidd(req, res, next)
{
	let response = true;
	const schemaIdIns = yup.object().shape({
		page: yup.number("Valor deve ser um número.").required("Valor é obrigatório."),
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório.")
	});

		await schemaIdIns.validate(req.query, req.params).catch(err => {
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

export async function putMetasMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

		await schemaPut.validate(req.params, req.body).catch(err => {
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
		productId: yup.string("Id do produto deve ser uma string.").required("Id do produto é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

		await schemaPutCurrentQuant.validate(req.params, req.body).catch(err => {
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