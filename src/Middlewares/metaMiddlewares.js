import * as yup from "yup";

export async function postMetaMidd(req, res, next){
	let response = true;
	const schema = yup.object().shape({
		name: yup.string("Nome deve ser uma string.").required("Nome é obrigtório."),
		value: yup.number("valor deve ser um  número.").required("Valor é obrigtório."),
		id_institution: yup.string("Id da instituição deve ser uma string.").required("Id da instituição é obrigtório.")
	});

	await schema.validate(req.body).catch(err => {
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
