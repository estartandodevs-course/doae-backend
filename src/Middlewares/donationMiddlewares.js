import * as yup from 'yup';

export async function postDonationMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		email_giver: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número."),
		id_target: yup.string("Id da meta deve ser uma string."),
		id_product: yup.string("Id do produto deve ser uma string."),
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

export async function getDonationsMidd(req, res, next)
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

//Essa função servirá tanto para getDoacaoById como para deleteDoacao

export async function getIdDonationMidd(req, res, next)
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

export async function getIdDonationsInsMidd(req, res, next)
{
	let response = true;
	const schemaIdIns = yup.object().shape({
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigatório.")
	});

	await schemaIdIns.validate(req.params).catch(err => {
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

export async function getIdDonationsTargetMidd(req, res, next)
{
	let response = true;
	const schemaIdTarget = yup.object().shape({
		id_meta: yup.string("Id da meta deve ser uma string.").required("Id da meta é obrigatório.")
	});

	await schemaIdTarget.validate(req.params).catch(err => {
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

export async function putDonationMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		status: yup.string("Status deve ser uma string.").required("Status é obrigatório."),
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