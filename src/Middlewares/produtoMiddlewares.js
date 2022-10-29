import * as yup from "yup";

export async function postProdutoMidd(req, res, next)
{	
	let response = true;
	const schemaPost = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id_meta: yup.string("Id da meta deve ser uma string.").required("Id da meta é obrigatório.")
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

export async function getProdutoIdMetaMidd(req, res, next)
{
	let response = true;
	const schemaGet = yup.object().shape({
		page: yup.number("Valor deve ser um número."),
		id_meta: yup.string("Id da meta deve ser uma string.").required("Id da meta é obrigatório.")
	});

	await schemaGet.validate(req.query, req.params).catch(err => {
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

//Essa função servirá tanto para getProductById como para deleteProduct

export async function getIdProdutosMidd(req, res, next)
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

export async function putProdutoMidd(req, res, next)
{
	let response = true;
	const schemaPut = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigatório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigatório."),
		id: yup.string("Id deve ser uma string.").required("Id é obrigatório.")
	});

	await schemaPut.validate(req.body, req.params).catch(err => {
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