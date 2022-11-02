import * as yup from "yup";

export async function postPublicationMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		midia: yup.string("Midia deve ser uma string.").required("Midia é obrigatório."),
		description: yup.string("Descricão deve ser uma string.").required("Descricão é obrigatório."),
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

//Essa função servirá tanto para getPublicationById como para deletePublication

export async function getIdPublicationMidd(req, res, next)
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

export async function getPublicationByIdInstituicaoMidd(req, res, next)
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

export async function putPublicationMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		midia: yup.string("Midia deve ser uma string.").required("Midia é obrigatório."),
		description: yup.string("Descrição deve ser uma string.").required("Descrição é obrigatório."),
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

export async function putMidiaPublicationMidd(req, res, next)
{
	let response = true;
	const schemaPutMidia = yup.object().shape({
		midia: yup.string("Midia deve ser uma string.").required("Midia é obrigatório.")
	});

	const schemaPutMidia2 = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

  const schemaPath = yup.object().shape({
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

	await schemaPutMidia.validate(req.file).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

	await schemaPutMidia2.validate(req.query).catch(err => {
		response = false;
		return res.status(400).json({
			error: err.errors
		});
	});

  await schemaPath.validate(midia.path).catch(err => {
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